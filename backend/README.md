# Smart Recruiter Backend

This backend is designed for a hybrid architecture:
- **Node.js/Express**: API gateway, handles auth, routing, and communication with frontend
- **Python/FastAPI**: Handles AI tasks (Ollama embeddings, file parsing, vector search)
- **Postgres/pgvector**: Stores text and vector embeddings

## Folder Structure

```
backend/
  node_api/         # Node.js/Express API gateway
  python_ai/        # Python/FastAPI AI service (Ollama, embeddings, vector search)
  db/               # Database setup and migrations (Postgres/pgvector)
  README.md         # This file
```

## Setup Instructions

### 1. Database (Postgres + pgvector)
- Install Postgres
- Install the pgvector extension
- See `db/README.md` for setup and schema

### 2. Python AI Service
- Go to `python_ai/`
- Install dependencies: `pip install -r requirements.txt`
- Run FastAPI server: `uvicorn main:app --reload`

### 3. Node.js API Gateway
- Go to `node_api/`
- Install dependencies: `npm install`
- Run server: `npm run dev`

---

- The Node.js API will forward AI-related requests to the Python service.
- The Python service will handle file parsing, call Ollama, store/fetch vectors, and return results.
- Both services connect to the same Postgres database. 