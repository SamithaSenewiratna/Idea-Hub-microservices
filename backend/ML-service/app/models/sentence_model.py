from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')  # Pre-trained model from Hugging Face

def get_model():
    return model
 
