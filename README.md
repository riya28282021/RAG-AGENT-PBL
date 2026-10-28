# RAGENT — Explainable RAG Knowledge Assistant

> An AI-powered document intelligence platform that combines Retrieval-Augmented Generation (RAG), hybrid search, reranking, query rewriting, and retrieval transparency to provide grounded, citation-backed answers from user-provided documents.

## Overview

RAGENT is a full-stack Retrieval-Augmented Generation platform that allows users to interact with their own document collections using natural language.

Unlike a basic "PDF chatbot", RAGENT exposes and evaluates the underlying retrieval pipeline. Users can upload documents, ask questions, inspect the sources used to generate answers, compare documents, and evaluate retrieval and generation performance.

The project is designed as a final-year computer science project / research prototype with an emphasis on:

- Information retrieval
- Natural language processing
- Large Language Models
- Explainable AI
- Document intelligence
- Retrieval evaluation
- Agentic workflows

## Problem Statement

Traditional document search requires users to manually locate relevant information across potentially hundreds of pages.

LLM-based chatbots solve some of this problem but can introduce:

- Hallucinations
- Unsupported claims
- Poor retrieval
- Irrelevant context
- Difficulty identifying the source of an answer

RAGENT addresses these problems by combining document retrieval with language generation while making the retrieval process visible to the user.

## System Pipeline

```text
Documents
    ↓
Text Extraction
    ↓
Chunking
    ↓
Embeddings
    ↓
Vector Index
    ↓
User Query
    ↓
Query Rewriting
    ↓
┌───────────────────────┐
│                       │
│  Vector Search        │
│         +             │
│  Keyword Search       │
│                       │
└───────────┬───────────┘
            ↓
       Result Fusion
            ↓
         Reranker
            ↓
      Relevant Chunks
            ↓
           LLM
            ↓
    Answer + Citations

    # GET IT RUNNING 

    Follow these steps to spin up the local database servers, backend processing microservices, and the user interface dashboard on your machine.

📋 Prerequisites

• Node.js (v22.x.x LTS or higher)
• Python (v3.12 or higher)
• Ollama App installed natively from ollama.com

1️⃣ Terminal 1: Core AI Inference Engine

Ensure the Ollama application agent is running quietly in your desktop system tray. If you are on Linux or need to launch the server engine manually, fire it up in your first window:
bash
ollama serve
Use code with caution.
Open a sub-terminal tab or normal session window to pull down the free, open-weight language models required by the pipeline:
bash
ollama pull gemma3:4b
ollama pull mxbai-embed-large
Use code with caution.
(Note: Leave this background architecture listening on default port 11434).

2️⃣ Terminal 2: Python FastAPI REST API Backend

Navigate into your local directory structure, activate your isolated Python virtual environment wrapper, install required dependency packages, and initialize the microservice router:
powershell
# Move into the backend microservice folder
cd backend

# Activate Virtual Environment (Windows PowerShell)
.venv\Scripts\Activate.ps1

# Activate Virtual Environment (Alternative: Windows CMD)
# .venv\Scripts\activate

# Activate Virtual Environment (Alternative: Mac / Linux)
# source .venv/bin/activate

# Ensure system dependencies match specification versions
pip install -r requirements.txt

# Launch the Uvicorn gateway server
python main.py
Use code with caution.
(The terminal console will initialize a persistent local conversations.db database file and log active confirmation lines listening on port 8000: Uvicorn running on http://127.0.0.1:8000).

3️⃣ Terminal 3: TanStack Start UI Frontend Platform

Open a third separate shell terminal window to spin up your responsive user interface workspace compiler:
bash
# Navigate to your root directory
cd RAG-AGENT-PBL

# Install dependencies (If running for the first time)
npm install

# Launch the local Vite development server pipeline
npm run dev
Use code with caution.

🌐 Accessing the Application

Once all windows are verified up and active, open your web browser and visit the local workspace server dashboard port output by your compiler:
👉 http://localhost:3000
• /chat: Submit queries and view real-time Query Rewriting logs and Explainable AI source citations pulled from Chroma DB.
• /documents: Drop fresh raw text or markdown files to wipe old cache states and trigger immediate hybrid BM25 keyword fusions.
• /evaluation: Execute the LLM-As-A-Judge benchmark suite to analyze Faithfulness, Recall@K, and processing latency strings live.
