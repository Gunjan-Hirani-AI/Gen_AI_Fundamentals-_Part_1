from dotenv import load_dotenv

load_dotenv()

from rich import print

from langchain.chat_models import init_chat_model

model = init_chat_model("google_genai:gemini-2.5-flash-lite")

result = model.invoke("who is narendra modi ?")

print(result.content)