from fastapi import FastAPI
from app.api.routes import router

app = FastAPI(title="Idea Hub - Smart Search")

app.include_router(router)
 
