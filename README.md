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
