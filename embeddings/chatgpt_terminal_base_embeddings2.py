from dotenv import load_dotenv
load_dotenv()
from langchain_core.messages import AIMessage,SystemMessage,HumanMessage

from langchain.chat_models import init_chat_model
from rich import print

model = init_chat_model(
    model='gpt-5-mini'
)

temp_storage=[
    SystemMessage(content='You are friendly AI')
]

print("********************* Type 0 to exit *********************")
while True:
    prompt = input("You : ")
    temp_storage.append(HumanMessage(content=prompt))
    if prompt == '0':
        break
    res = model.invoke(temp_storage)
    temp_storage.append(AIMessage(content=res.content))
    print("BOT : ",res.content)

print(temp_storage)