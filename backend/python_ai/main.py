from fastapi import FastAPI, UploadFile, File, Form
from fastapi.responses import JSONResponse
from typing import List

app = FastAPI()

@app.post("/embed")
async def embed_text(text: str = Form(...)):
    # Dummy embedding for now
    embedding = [0.0] * 768
    return {"embedding": embedding} 