from dotenv import load_dotenv
load_dotenv()
from rich import print

from langchain.chat_models import init_chat_model

# model = init_chat_model(
#     model_name="gpt-3.5-turbo",
#     api_key=os.getenv("OPENAI_API_KEY"),
#     base_url=os.getenv("OPENAI_BASE_URL"),
#     temperature=0.7,
#     max_tokens=100,
#     timeout=10,
#     streaming=True,
#     verbose=True,
# )

model = init_chat_model("gpt-5",temperature=0.9,max_tokens=450)
#print(model)

result = model.invoke("Write a one-line of a startup that delivers food.")

#print(result)
print(result.content)