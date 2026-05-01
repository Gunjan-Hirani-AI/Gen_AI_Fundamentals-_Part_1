from dotenv import load_dotenv
load_dotenv()
from rich import print
from langchain_openai import OpenAIEmbeddings
from langchain.chat_models import init_chat_model

embeddings =  OpenAIEmbeddings(
    model='text-embedding-3-small',
    dimensions=64  #that means only 64 vectors make in embeddings means if we do not write this then the we got long embeddings object , try to run this file without thisline , you will got it 
)

model = init_chat_model(
    model="gpt-5-mini"
)

temp_storage=[]

print("********************* Type 0 to exit *********************")
while True:
    prompt = input("YOU : ")
    temp_storage.append(prompt)
    if prompt == "0":
        break
    vector = embeddings.embed_query(prompt) # there is embed_documets whoch is use for the large docs like objects , means if we do the embedding of the docs then use this , there is also another embed_query() for single line prompt embedding
    #print(vector)
    #here just we make embeddings for practice , note that the bot response is here is independant with this embeddings

    res = model.invoke(temp_storage)
    temp_storage.append(res.content)
    print("BOT : ",res.content)
print(temp_storage)