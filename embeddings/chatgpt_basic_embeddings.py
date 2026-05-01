from dotenv import load_dotenv
load_dotenv()
from langchain_openai import OpenAIEmbeddings
from rich import print

embeddings = OpenAIEmbeddings(
    model='text-embedding-3-small',
    dimensions=64
)

vector = embeddings.embed_query("I am amazing at GENAI")

print(vector)