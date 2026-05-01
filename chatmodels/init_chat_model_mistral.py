from langchain.chat_models import init_chat_model

from dotenv import load_dotenv
from rich import print

load_dotenv()

model = init_chat_model("mistral-large-latest",temperature=0.8)

res = model.invoke("Write a one-line description of a startup that delivers food.")

print(res.content)