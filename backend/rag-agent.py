import os
import re
from pathlib import Path
from langchain_chroma import Chroma
from langchain_core.documents import Document
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
from rank_bm25 import BM25Okapi

os.environ["OPENAI_BASE_URL"] = "http://localhost:11434/v1"
os.environ["OPENAI_API_KEY"] = "ollama"

BASE_DIR = Path(__file__).resolve().parent
CHROMA_PATH = BASE_DIR / "chroma_db"

llm = ChatOpenAI(
    model="gemma3:4b", 
    base_url=os.environ["OPENAI_BASE_URL"],
    api_key=os.environ["OPENAI_API_KEY"],
    temperature=0,
    timeout=300.0,
)

embeddings = OpenAIEmbeddings(
    model="mxbai-embed-large", 
    base_url=os.environ["OPENAI_BASE_URL"],
    api_key=os.environ["OPENAI_API_KEY"],
    check_embedding_ctx_length=False,
)

global_chunks = []
bm25_instance = None

def get_vector_store():
    return Chroma(
        collection_name="ragent_documents",
        embedding_function=embeddings,
        persist_directory=str(CHROMA_PATH),
    )

def load_documents(target_path: Path):
    """Reads a text file safely, automatically handling Windows UTF-16 byte order marks."""
    if not target_path.exists():
        return []
    
    # Try reading as standard UTF-8 first
    try:
        text = target_path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        # Fallback to UTF-16 if Windows encoding variation throws an exception
        try:
            print(f"🔄 Encoding variation detected. Retrying {target_path.name} with UTF-16 decoding...")
            text = target_path.read_text(encoding="utf-16")
        except Exception as e:
            raise IOError(f"Could not automatically parse document text encoding layout: {str(e)}")
            
    return [Document(page_content=text, metadata={"source": target_path.name})]

def build_vector_store(target_path: Path):
    """Wipes old records and populates both metrics indices safely."""
    global global_chunks, bm25_instance
    
    # Core fix: Now safely calls the encoding-aware function block wrapper
    documents = load_documents(target_path)
    
    if not documents:
        return get_vector_store()
    
    splitter = RecursiveCharacterTextSplitter(chunk_size=512, chunk_overlap=64)
    global_chunks = splitter.split_documents(documents)
    
    # Rebuild the BM25 Index in memory
    tokenized_corpus = [re.sub(r'[^\w\s]', '', c.page_content.lower()).split() for c in global_chunks]
    bm25_instance = BM25Okapi(tokenized_corpus)
    
    vector_store = get_vector_store()
    existing = vector_store.get()
    if existing["ids"]:
        vector_store.delete(ids=existing["ids"])
        
    vector_store.add_documents(global_chunks)
    print(f"✅ Successfully hybrid-indexed: {target_path.name} ({len(global_chunks)} chunks)")
    return vector_store

def rewrite_query(original_query: str) -> str:
    rewrite_prompt = [
        ("system", "You are an Information Retrieval helper. Rewrite the user's input query into optimal, concise search terms for a database. Respond ONLY with the raw search terms, nothing else."),
        ("human", f"Original question: {original_query}")
    ]
    try:
        response = llm.invoke(rewrite_prompt)
        cleaned = response.content.strip().replace('"', '')
        print(f"🔄 [Query Rewrite] '{original_query}' -> '{cleaned}'")
        return cleaned if cleaned else original_query
    except Exception:
        return original_query

def hybrid_retrieve(query: str, k: int = 3):
    global global_chunks, bm25_instance
    vector_store = get_vector_store()
    
    vector_hits = vector_store.similarity_search_with_score(query, k=k*2)
    
    if not global_chunks or bm25_instance is None:
        return vector_hits[:k]
        
    tokenized_query = re.sub(r'[^\w\s]', '', query.lower()).split()
    bm25_scores = bm25_instance.get_scores(tokenized_query)
    bm25_hit_indices = sorted(range(len(bm25_scores)), key=lambda i: bm25_scores[i], reverse=True)[:k*2]
    
    rrf_scores = {}
    for rank, (doc, _) in enumerate(vector_hits):
        rrf_scores[doc.page_content] = rrf_scores.get(doc.page_content, 0) + (1.0 / (60 + rank))
        
    for rank, idx in enumerate(bm25_hit_indices):
        chunk_doc = global_chunks[idx]
        rrf_scores[chunk_doc.page_content] = rrf_scores.get(chunk_doc.page_content, 0) + (1.0 / (60 + rank))
        
    doc_lookup = {d.page_content: d for d, _ in vector_hits}
    for idx in bm25_hit_indices:
        c = global_chunks[idx]
        doc_lookup[c.page_content] = c
        
    sorted_docs = sorted(rrf_scores.keys(), key=lambda text: rrf_scores[text], reverse=True)[:k]
    
    final_hits = []
    for doc_text in sorted_docs:
        final_hits.append((doc_lookup[doc_text], 1.0 - rrf_scores[doc_text]))
        
    return final_hits

SYSTEM_PROMPT = """
You are RAGENT, a document-grounded question-answering assistant.
Answer using only the supplied document context. Cite supporting passages as [chunk 1].
"""

def ask_with_rag(query: str):
    optimized_query = rewrite_query(query)
    hits = hybrid_retrieve(optimized_query, k=3)
    
    if not hits:
        return {"answer": "I could not find relevant passages in the indexed documents.", "sources": []}
        
    context_parts = []
    sources = []
    for index, (document, score) in enumerate(hits, start=1):
        context_parts.append(f"[chunk {index}]\n{document.page_content}")
        sources.append({
            "chunk": index,
            "source": document.metadata.get("source", "Unknown source"),
            "text": document.page_content,
            "score": float(score),
        })
        
    context = "\n\n".join(context_parts)
    messages = [
        ("system", SYSTEM_PROMPT),
        ("human", f"Document context:\n{context}\n\nQuestion: {query}"),
    ]
    response = llm.invoke(messages)
    return {"answer": response.content, "sources": sources}
