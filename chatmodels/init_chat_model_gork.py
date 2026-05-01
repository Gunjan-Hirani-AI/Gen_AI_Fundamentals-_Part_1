from langchain.chat_models import init_chat_model
from dotenv import load_dotenv

load_dotenv()

model = init_chat_model("groq:openai/gpt-oss-120b")  # note here i use the openai because it is free in the groq , if you want to use real api of groq then you have to pay

response = model.invoke("Hello, who are you?")

print(response.content)