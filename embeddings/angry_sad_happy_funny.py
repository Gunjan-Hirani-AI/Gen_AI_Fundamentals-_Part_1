from dotenv import load_dotenv
load_dotenv()
from langchain.chat_models import init_chat_model
from rich import print
from langchain_core.messages import AIMessage,SystemMessage,HumanMessage


model = init_chat_model(
    model='gpt-5-mini'
)

print("********************* Type 0 to exit *********************")
print("Write 1 for Happy AI")
print("Write 2 for Sad AI")
print("Write 3 for Angree AI")
print("Write 4 for Funny AI")

choice = int(input("Select Mood of AI : "))

if choice == 1:
    mood='You are a happy AI. Every reply should be cheerful and positive.'
elif choice == 2:
    mood='You are a sad AI. Every reply should be emotional and so sad'
elif choice == 3:
    mood='You are an angry AI. Every reply should sound aggressive.'
elif choice == 4:
    mood='You are a funny AI. Every reply should be humorous'
else:
    print("Please select among the 1,2,3,4 , not other ")
    exit()

temp_storage = [
    SystemMessage(content=mood)
]


while True:
    prompt = input("YOU : ")
    temp_storage.append(HumanMessage(content=prompt))
    if prompt == '0':
        break
    res = model.invoke(temp_storage)
    temp_storage.append(AIMessage(content=res.content))
    print("BOT : ",res.content)
print(temp_storage)
