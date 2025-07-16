# Python AI Service (FastAPI)

This service handles all AI-related tasks for Smart Recruiter:
- File parsing (PDF/DOCX to text)
- Calling Ollama for embeddings
- Storing and searching vectors in Postgres/pgvector
- Comparing resume and JD vectors

## Setup

1. `cd python_ai`
2. `pip install -r requirements.txt`
3. `uvicorn main:app --reload`

## Structure
- `main.py` — FastAPI app
- `ollama_client.py` — Ollama API integration
- `db.py` — Database connection and vector operations
- `utils.py` — File parsing utilities
- `.env` — Environment variables 