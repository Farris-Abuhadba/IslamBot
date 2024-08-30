from fastapi import FastAPI
from pydantic import BaseModel
from utils import loadPdfs, getAnswer
import config

app = FastAPI()

pdfTexts = loadPdfs(config.PDF_DIR)


class Question(BaseModel):
    text: str


class Answer(BaseModel):
    text: str


@app.post("/ask", response_model=Answer)
async def askQuestion(question: Question):
    response = getAnswer(question.text, pdfTexts)
    return Answer(text=response)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
