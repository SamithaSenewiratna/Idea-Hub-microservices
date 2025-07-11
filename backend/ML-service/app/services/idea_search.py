import torch
from sentence_transformers import util
from app.models.sentence_model import get_model
from app.data.idea_titles import get_idea_titles

model = get_model()
all_ideas = get_idea_titles()

# Prepare full embeddings
all_titles = [idea["title"] for idea in all_ideas]
all_embeddings = model.encode(all_titles, convert_to_tensor=True)

def search_ideas(query: str, category: str = None, top_k: int = 5):
    query_embedding = model.encode(query, convert_to_tensor=True)
    scores = util.cos_sim(query_embedding, all_embeddings)[0]

    top_results = torch.topk(scores, k=len(all_ideas))  # Get all, then filter

    results = []
    for idx in top_results.indices:
        idea = all_ideas[idx]
        if category is None or idea["category"].lower() == category.lower():
            results.append({
                "title": idea["title"],
                "category": idea["category"]
            })
        if len(results) == top_k:
            break

    return results
