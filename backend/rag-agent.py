import os
from langchain_openai import ChatOpenAI

# Familiar OpenAI interface. The API key and gateway URL come from the environment,
# so this is exactly the code you'd write against OpenAI itself.
llm = ChatOpenAI(model="google.gemma-3-4b-it", base_url=os.environ["OPENAI_BASE_URL"])

# A question whose answer is in the document but the LLM has no way to know
# it on its own. The document lists the exact domains TensorTonic's coding
# problems cover; without retrieval the LLM can only guess or decline.
question = "What domains do TensorTonic's coding problems cover?"
print(llm.invoke([("human", question)]).content)

from langchain_core.documents import Document

text = open("document.txt", encoding="utf-8").read()
doc = Document(page_content=text, metadata={"source": "document.txt"})

print(f"Loaded {len(text):,} characters into 1 document.")

import os
from langchain_openai import OpenAIEmbeddings
from langchain_chroma import Chroma
from langchain_text_splitters import RecursiveCharacterTextSplitter

# TODO 1: create a splitter.
#   - Use RecursiveCharacterTextSplitter.
#   - Pick a chunk size around 512 characters and an overlap around 64.
#   - Docs: https://python.langchain.com/docs/how_to/recursive_text_splitter/
splitter = None  # replace with your splitter

# TODO 2: turn the loaded `doc` into a list of chunks.
#   - Use splitter.split_documents on a list containing your one Document.
chunks = []  # replace with your chunks

# The embeddings client. Familiar OpenAI interface, pointed at the gateway.
# Each chunk becomes a 1024-dim vector. (check_embedding_ctx_length=False sends
# raw text, not pre-tokenized ids.)
embeddings = OpenAIEmbeddings(model="amazon.titan-embed-text-v2:0", base_url=os.environ["OPENAI_BASE_URL"], check_embedding_ctx_length=False)

# TODO 3: build a Chroma vector store from your chunks.
#   - Use Chroma.from_documents.
#   - Docs: https://python.langchain.com/docs/integrations/vectorstores/chroma/
vector_store = None  # replace with your Chroma store

print(f"{len(chunks)} chunks embedded and indexed.")

import io, base64
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

# Patches plt.show() to send PNG to the TT frontend. Don't touch.
def _tt_show(*args, **kwargs):
    fig = plt.gcf()
    buf = io.BytesIO()
    fig.savefig(buf, format="png", bbox_inches="tight", dpi=80)
    plt.close(fig)
    print(f"__TT_PNG_START__{base64.b64encode(buf.getvalue()).decode()}__TT_PNG_END__")
plt.show = _tt_show

# TODO: implement retrieve.
#   - Inputs: a query string, and k (number of top chunks to return).
#   - Use vector_store.similarity_search_with_score(query, k=k).
#   - Return whatever similarity_search_with_score returns.
#   - Docs: https://python.langchain.com/docs/integrations/vectorstores/chroma/
def retrieve(query: str, k: int = 3):
    pass  # replace with your implementation

hits = retrieve(question)

# Top hits as a simple bar chart in text.
print(f"Top {len(hits)} hits for: {question!r}\n")
max_d = max(s for _, s in hits)
for i, (chunk, score) in enumerate(hits, 1):
    filled = int(40 * (1 - score / max_d))
    bar = "█" * filled + "░" * (40 - filled)
    print(f"[{i}] {bar} {score:.3f}")
    print(f"    {chunk.page_content[:900].replace(chr(10), ' ')}...\n")

# Where chunks live in embedding space, with your question as a red star.
raw = vector_store._collection.get(include=["embeddings", "documents"])
chunk_vecs = np.array(raw["embeddings"])
q_vec = np.array(embeddings.embed_query(question))
hit_texts = {c.page_content for c, _ in hits}
hit_mask = np.array([t in hit_texts for t in raw["documents"]])

joint = np.vstack([chunk_vecs, q_vec])
centered = joint - joint.mean(axis=0)
_, _, Vt = np.linalg.svd(centered, full_matrices=False)
proj = centered @ Vt[:2].T

fig, ax = plt.subplots(figsize=(7, 5))
ax.scatter(proj[:-1][~hit_mask, 0], proj[:-1][~hit_mask, 1],
           s=60, c="#666", alpha=0.55, label="chunk")
ax.scatter(proj[:-1][hit_mask, 0], proj[:-1][hit_mask, 1],
           s=110, c="#10b981", edgecolor="black", linewidth=0.6, label="retrieved")
ax.scatter(proj[-1, 0], proj[-1, 1],
           s=240, c="#ef4444", marker="*", edgecolor="black", linewidth=0.6, label="question")
ax.set_title("Chunks in embedding space")
ax.set_xlabel("dim 1"); ax.set_ylabel("dim 2")
ax.legend(loc="best", fontsize=9, frameon=False)
ax.grid(True, alpha=0.2)
plt.tight_layout()
plt.show()

# TODO 1: write the SYSTEM prompt.
#   - Tell the model to answer using ONLY the provided context.
#   - Tell it to cite passages as [chunk N].
#   - Tell it what to do when the context does not contain the answer.
#   - Tell it to reply in plain text (no markdown).
SYSTEM = ""  # replace with your prompt

# TODO 2: implement ask_with_rag.
#   - Call retrieve(query, k=3) to get the top hits.
#   - Build a context string: each chunk labelled "[chunk N]" then the chunk text.
#   - Build messages: a system message with SYSTEM, then a human message that
#     includes the context AND the question.
#   - Call llm.invoke(messages) and return the .content string.
#   - Docs: https://python.langchain.com/docs/integrations/chat/bedrock/
def ask_with_rag(query: str) -> str:
    pass  # replace with your implementation

print(ask_with_rag(question))

def ask_bare(query: str) -> str:
    return llm.invoke([("human", query)]).content

# Same question we asked in cell 1, but this time we run it both ways.
print("BARE LLM (no retrieval)")
print("-" * 40)
print(ask_bare(question))
print()
print("WITH RAG (retrieves from document.txt)")
print("-" * 40)
print(ask_with_rag(question))

# Each question targets a specific detail in the document. The third one
# asks something NOT in the document, so RAG should refuse cleanly.
for q in [
    "What math topics does TensorTonic teach?",
    "What approach does TensorTonic's Research Papers section take?",
    "When was TensorTonic founded?",  # not in doc
]:
    print(f"Q: {q}")
    print(f"A: {ask_with_rag(q)}")
    print()
