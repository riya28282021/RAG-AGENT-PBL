import os
from pathlib import Path
from langchain_chroma import Chroma
from langchain_core.documents import Document
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter

print("🔄 [1/5] Starting script initialization...")

os.environ["OPENAI_BASE_URL"] = "http://localhost:11434/v1"
os.environ["OPENAI_API_KEY"] = "ollama"

BASE_DIR = Path(__file__).resolve().parent
DOCUMENT_PATH = BASE_DIR / "document.txt"
CHROMA_PATH = BASE_DIR / "chroma_db"

BASE_URL = os.environ["OPENAI_BASE_URL"]
API_KEY = os.environ["OPENAI_API_KEY"]

print("🔄 [2/5] Connecting to local Ollama models...")
llm = ChatOpenAI(
    model="gemma3:4b", 
    base_url=BASE_URL,
    api_key=API_KEY,
    temperature=0,
    timeout=300.0,
)

embeddings = OpenAIEmbeddings(
    model="mxbai-embed-large", 
    base_url=BASE_URL,
    api_key=API_KEY,
    check_embedding_ctx_length=False,
)

def load_documents(target_path: Path = DOCUMENT_PATH):
    """Reads a file dynamically from disk, automatically handling Windows encoding variations."""
    if not target_path.exists():
        return []
    
    # Try reading as UTF-8 first, fallback to UTF-16 if a Unicode byte error happens
    try:
        text = target_path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        try:
            print(f"🔄 Encoding variation detected. Retrying {target_path.name} with UTF-16 configuration...")
            text = target_path.read_text(encoding="utf-16")
        except Exception as e:
            raise IOError(f"Could not automatically parse document text encoding: {str(e)}")
            
    return [
        Document(
            page_content=text,
            metadata={"source": target_path.name},
        )
    ]
def build_vector_store(target_path: Path = DOCUMENT_PATH):
    """Processes, chunks, and hybrid-indexes the targeted document files safely."""
    global global_chunks, bm25_instance
    documents = load_documents(target_path)
    
    vector_store = Chroma(
        collection_name="ragent_documents",
        embedding_function=embeddings,
        persist_directory=str(CHROMA_PATH),
    )
    
    if not documents:
        return vector_store

    # Segment documents into text blocks
    splitter = RecursiveCharacterTextSplitter(chunk_size=512, chunk_overlap=64)
    global_chunks = splitter.split_documents(documents)
    
    # Initialize/Rebuild the BM25 Keyword Search Index in memory
    tokenized_corpus = [re.sub(r'[^\w\s]', '', c.page_content.lower()).split() for c in global_chunks]
    bm25_instance = BM25Okapi(tokenized_corpus)
    
    # Clear old collection records instantly before writing fresh ones
    existing = vector_store.get()
    if existing["ids"]:
        vector_store.delete(ids=existing["ids"])
        
    vector_store.add_documents(global_chunks)
    print(f"✅ Successfully hybrid-indexed: {target_path.name} ({len(global_chunks)} chunks)")
    return vector_store


# Global vector store instance initialization
vector_store = build_vector_store()
print("✅ [5/5] Vector store ready for production search queries!")

def retrieve(query: str, k: int = 3):
    return vector_store.similarity_search_with_score(query, k=k)

SYSTEM_PROMPT = """
You are RAGENT, a document-grounded question-answering assistant.
Answer using only the supplied document context. Cite supporting passages as [chunk 1].
"""

def ask_with_rag(query: str):
    print(f"\n🔍 Searching database index for: '{query}'...")
    hits = retrieve(query, k=3)
    
    if not hits:
        return {"answer": "I could not find relevant passages.", "sources": []}
        
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
    
    print("🧠 Sending retrieved context to Gemma 3 for final grounding...")
    response = llm.invoke(messages)
    return {"answer": response.content, "sources": sources}

if __name__ == "__main__":
    test_query = "summarize the document for me"
    result = ask_with_rag(test_query)
    print("\n--- RESPONSE FROM RAGENT ---")
    print(result["answer"])
