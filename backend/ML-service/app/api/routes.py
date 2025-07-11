from fastapi import APIRouter, Query
from typing import Optional
from app.services.idea_search import search_ideas

router = APIRouter()

@router.get("/search-ideas")
def search_ideas_api(
    q: str = Query(..., description="Search idea name"),
    category: Optional[str] = Query(None, description="Optional category filter")
):
    results = search_ideas(q, category)
    return {
        "query": q,
        "category": category,
        "suggestions": results
    }
