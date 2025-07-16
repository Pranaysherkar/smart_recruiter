-- Enable the pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Create a table to store resume vectors
CREATE TABLE IF NOT EXISTS resumes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  content TEXT,
  embedding VECTOR(5),  -- Change 1536 based on your LLM embedding size
  uploaded_at TIMESTAMP DEFAULT NOW()
);
