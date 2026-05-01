// File data for the portfolio showcase
export interface Tab {
  id: string;
  label: string;
  title?: string;
  description?: string;
  input?: string;
  output?: string;
  keyLearnings?: string[];
  code?: string;
}

export interface FileItem {
  id: string;
  name: string;
  title: string;
  description: string;
  libraries: string[];
  input: string;
  output: string;
  keyLearnings: string[];
  code: string;
  tabs?: Tab[];
}

export const fileData: { chatmodels: FileItem[], embeddings: FileItem[] } = {
  chatmodels: [
    {
      id: "init_chat_model_chatgpt",
      name: "init_chat_model_chatgpt.py",
      title: "OpenAI GPT-5 Chat Model",
      description: "Basic implementation of OpenAI GPT-5 model initialization using langchain. Demonstrates how to set up a chat model with custom temperature and max_tokens for controlling response creativity and length. Shows using .invoke() method with the model to get chat completions.",
      libraries: [
        "dotenv:load_dotenv",
        "langchain.chat_models:init_chat_model",
        "rich:print"
      ],
      input: 'String prompt: "Write a one-line of a startup that delivers food."',
      output: "Returns a creative one-line startup description string",
      keyLearnings: [
        "Using init_chat_model() for model initialization",
        "Setting temperature (0.9) for creative responses",
        "Setting max_tokens (450) for response length control",
        "Using .invoke() method for chat completion",
        "Accessing response.content for the output"
      ],
      code: `from dotenv import load_dotenv
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
print(result.content)`
    },
    {
      id: "init_chat_model_gemini",
      name: "init_chat_model_gemini.py",
      title: "Google Gemini 2.5 Flash Lite",
      description: "Implementation of Google's Gemini model through langchain. Shows how to integrate Google's gemini-2.5-flash-lite model for fast and efficient chat responses using the google_genai provider.",
      libraries: [
        "dotenv:load_dotenv",
        "langchain.chat_models:init_chat_model",
        "rich:print"
      ],
      input: 'String prompt: "who is narendra modi ?"',
      output: "Returns information about Narendra Modi",
      keyLearnings: [
        "Using google_genai provider in langchain",
        "Model: google_genai:gemini-2.5-flash-lite",
        "Fast response with flash model",
        "API key management via .env"
      ],
      code: `from dotenv import load_dotenv

load_dotenv()

from rich import print

from langchain.chat_models import init_chat_model

model = init_chat_model("google_genai:gemini-2.5-flash-lite")

result = model.invoke("who is narendra modi ?")

print(result.content)`
    },
    {
      id: "init_chat_model_gork",
      name: "init_chat_model_gork.py",
      title: "Groq OpenAI GPT-OSS 120B",
      description: "Using Groq's free API to access OpenAI's GPT-OSS 120B model. Demonstrates the free tier usage of Groq inference engine for high-quality responses without OpenAI costs.",
      libraries: [
        "langchain.chat_models:init_chat_model",
        "dotenv:load_dotenv"
      ],
      input: 'String prompt: "Hello, who are you?"',
      output: "Returns AI self-introduction",
      keyLearnings: [
        "Using Groq as free inference provider",
        "Model: groq:openai/gpt-oss-120b",
        "Free API usage without OpenAI costs",
        "Setting up Groq API key in .env"
      ],
      code: `from langchain.chat_models import init_chat_model
from dotenv import load_dotenv

load_dotenv()

model = init_chat_model("groq:openai/gpt-oss-120b")  
# note here i use the openai because it is free 
# in the groq , if you want to use real api 
# of groq then you have to pay

response = model.invoke("Hello, who are you?")

print(response.content)`
    },
    {
      id: "init_chat_model_mistral",
      name: "init_chat_model_mistral.py",
      title: "Mistral Large Latest",
      description: "Implementation of Mistral AI's latest large model. Shows how to use mistral-large-latest model with custom temperature for creative responses.",
      libraries: [
        "langchain.chat_models:init_chat_model",
        "dotenv:load_dotenv",
        "rich:print"
      ],
      input: 'String prompt: "Write a one-line description of a startup that delivers food."',
      output: "Returns startup description with creative flair",
      keyLearnings: [
        "Mistral AI model integration",
        "Setting temperature (0.8) for creativity",
        "Using mistral-large-latest model",
        "Comparing different LLM providers"
      ],
      code: `from langchain.chat_models import init_chat_model

from dotenv import load_dotenv
from rich import print

load_dotenv()

model = init_chat_model("mistral-large-latest",temperature=0.8)

res = model.invoke("Write a one-line description of a startup that delivers food.")

print(res.content)`
    }
  ],
  embeddings: [
    {
      id: "angry_sad_happy_funny",
      name: "angry_sad_happy_funny.py",
      title: "Mood-Based Chat System",
      description: "Interactive chat system with 4 different AI moods (Happy, Sad, Angry, Funny). Uses SystemMessage to set the AI's persona and maintains conversation history for context.",
      libraries: [
        "dotenv:load_dotenv",
        "langchain.chat_models:init_chat_model",
        "rich:print",
        "langchain_core.messages:AIMessage,SystemMessage,HumanMessage"
      ],
      input: "User selects mood (1-4) then enters chat messages",
      output: "AI response based on selected mood/persona",
      keyLearnings: [
        "SystemMessage for setting AI persona",
        "HumanMessage for user inputs",
        "AIMessage for AI responses",
        "Maintaining context with message history"
      ],
      code: `from dotenv import load_dotenv
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
print(temp_storage)`,
      tabs: [
        {
          id: "early",
          label: "Early Stage",
          title: "Simple Model Invocation",
          description: "This is where we started: a simple prompt-response without any complex logic or persona.",
          input: 'String: "Hello"',
          output: "AI response",
          keyLearnings: ["Basic model setup", "Direct invocation"],
          code: `from dotenv import load_dotenv
load_dotenv()
from langchain.chat_models import init_chat_model

model = init_chat_model(model='gpt-5-mini')
res = model.invoke("Hello, how are you?")
print(res.content)`
        }
      ]
    },
    {
      id: "chatgpt_basic_embeddings",
      name: "chatgpt_basic_embeddings.py",
      title: "Basic Text Embeddings",
      description: "Introduction to text embeddings using OpenAI's text-embedding-3-small model. Shows how to convert text into vector representations for semantic search. Demonstrates the embed_query() method.",
      libraries: [
        "dotenv:load_dotenv",
        "langchain_openai:OpenAIEmbeddings",
        "rich:print"
      ],
      input: 'String: "I am amazing at GENAI"',
      output: "Returns 64-dimensional embedding vector",
      keyLearnings: [
        "OpenAIEmbeddings class usage",
        "Model: text-embedding-3-small",
        "dimensions parameter for vector size control",
        "embed_query() for single text embedding"
      ],
      code: `from dotenv import load_dotenv
load_dotenv()
from langchain_openai import OpenAIEmbeddings
from rich import print

embeddings = OpenAIEmbeddings(
    model='text-embedding-3-small',
    dimensions=64
)

vector = embeddings.embed_query("I am amazing at GENAI")

print(vector)`
    },
    {
      id: "chatgpt_terminal_base_embeddings",
      name: "chatgpt_terminal_base_embeddings.py",
      title: "Interactive Embeddings with Chat",
      description: "Combines embeddings with chat model for interactive terminal experience. Demonstrates the difference between embed_query() and embed_documents().",
      libraries: [
        "dotenv:load_dotenv",
        "langchain_openai:OpenAIEmbeddings",
        "langchain.chat_models:init_chat_model",
        "rich:print"
      ],
      input: "User text input via terminal",
      output: "Chat response + embedding vector (calculated but independent)",
      keyLearnings: [
        "Combining embeddings + chat models",
        "embed_query() for single prompts",
        "Interactive terminal chat loop"
      ],
      code: `from dotenv import load_dotenv
load_dotenv()
from rich import print
from langchain_openai import OpenAIEmbeddings
from langchain.chat_models import init_chat_model

embeddings =  OpenAIEmbeddings(model='text-embedding-3-small', dimensions=64)
model = init_chat_model(model="gpt-5-mini")

temp_storage=[]
while True:
    prompt = input("YOU : ")
    temp_storage.append(prompt)
    if prompt == "0": break
    vector = embeddings.embed_query(prompt) 
    res = model.invoke(temp_storage)
    temp_storage.append(res.content)
    print("BOT : ",res.content)`,
      tabs: [
        {
          id: "early",
          label: "Early Stage",
          title: "Initial Embedding Test",
          description: "Testing basic embedding generation alongside a chat model.",
          code: `from langchain_openai import OpenAIEmbeddings
embeddings = OpenAIEmbeddings(model='text-embedding-3-small')
print(embeddings.embed_query("Hello world"))`
        },
        {
          id: "limitations",
          label: "Limitations",
          title: "Why v1 needs improvement",
          description: "The primary limitations of this initial implementation that led to v2 development.",
          keyLearnings: [
            "Uses raw list of strings for history (no role distinction)",
            "Lacks SystemMessage to define AI persona",
            "Embeddings are calculated but not utilized for retrieval (RAG)",
            "No proper message object structure (HumanMessage/AIMessage)"
          ]
        }
      ]
    },
    {
      id: "chatgpt_terminal_base_embeddings2",
      name: "chatgpt_terminal_base_embeddings2.py",
      title: "Message History Chat",
      description: "Chat implementation with proper message history using SystemMessage, HumanMessage, and AIMessage.",
      libraries: [
        "dotenv:load_dotenv",
        "langchain.chat_models:init_chat_model",
        "langchain_core.messages:AIMessage,SystemMessage,HumanMessage",
        "rich:print"
      ],
      input: "User text input",
      output: "AI response with full context",
      keyLearnings: [
        "SystemMessage for system prompt",
        "HumanMessage for user inputs",
        "AIMessage for AI responses",
        "Building conversation context"
      ],
      code: `from dotenv import load_dotenv
load_dotenv()
from langchain_core.messages import AIMessage,SystemMessage,HumanMessage
from langchain.chat_models import init_chat_model
from rich import print

model = init_chat_model(model='gpt-5-mini')
temp_storage=[SystemMessage(content='You are friendly AI')]

while True:
    prompt = input("You : ")
    temp_storage.append(HumanMessage(content=prompt))
    if prompt == '0': break
    res = model.invoke(temp_storage)
    temp_storage.append(AIMessage(content=res.content))
    print("BOT : ",res.content)`,
      tabs: [
        {
          id: "early",
          label: "Early Stage",
          title: "From v1 to v2",
          description: "Transitioning from string-based history to structured Message objects.",
          code: `# Improved from v1 by introducing HumanMessage/AIMessage`
        },
        {
          id: "limitations",
          label: "Limitations",
          title: "Future Improvements",
          description: "Even with structured messages, there are still areas for growth.",
          keyLearnings: [
            "Manual list management (no automated memory window)",
            "Memory is volatile (lost on script restart)",
            "No support for complex retrieval (Vector DBs)",
            "No streaming implementation yet"
          ]
        }
      ]
    },
    {
      id: "structured_output_prompts",
      name: "structured_output_prompts.py",
      title: "Pydantic Structured Output",
      description: "Using PydanticOutputParser to get structured data from LLM. Extracts movie information from text into a structured Movie object with type validation using Pydantic.",
      libraries: [
        "dotenv:load_dotenv",
        "langchain.chat_models:init_chat_model",
        "pydantic:BaseModel",
        "langchain_core.prompts:ChatPromptTemplate",
        "langchain_core.output_parsers:PydanticOutputParser",
        "rich:print"
      ],
      input: "Movie description paragraph",
      output: "Structured Movie object with title, year, genre, director, cast, rating, summary",
      keyLearnings: [
        "Pydantic BaseModel for data structures",
        "PydanticOutputParser for structured output",
        "ChatPromptTemplate with format instructions",
        "Parser.parse() for converting response to object"
      ],
      code: `from dotenv import load_dotenv
load_dotenv()
from langchain.chat_models import init_chat_model
from rich import print
from pydantic import BaseModel
from typing import List,Optional
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import PydanticOutputParser

class Movie(BaseModel):
    title: str
    release_year : Optional[int]
    genre : List[str]
    director: Optional[str]
    cast: List[str]
    rating: Optional[float]
    summary: str

parser = PydanticOutputParser(pydantic_object=Movie)

prompt = ChatPromptTemplate.from_messages([
    ('system', "Extract movie information from the paragraph {format_instructions}"),
    ("human","{paragraph}")
])

model = init_chat_model(model='gpt-5-mini')
para = input("Give your paragraph : ")

final_prompt = prompt.invoke({
    "paragraph" : para,
    'format_instructions': parser.get_format_instructions()
})

res = model.invoke(final_prompt)
movie_data = parser.parse(res.content)
print(movie_data)`
    },
    {
      id: "template_prompts",
      name: "template_prompts.py",
      title: "ChatPrompt Template",
      description: "Using ChatPromptTemplate for structured prompts with system and human messages. Demonstrates template-based prompt engineering for consistent output formats.",
      libraries: [
        "dotenv:load_dotenv",
        "langchain.chat_models:init_chat_model",
        "langchain_core.prompts:ChatPromptTemplate",
        "rich:print"
      ],
      input: "Movie description paragraph",
      output: "Structured movie information in specific format",
      keyLearnings: [
        "ChatPromptTemplate.from_messages()",
        "System + Human message templates",
        "Variable substitution with .invoke()",
        "Structured output format templates"
      ],
      code: `from dotenv import load_dotenv
load_dotenv()
from rich import print
from langchain.chat_models import init_chat_model
from langchain_core.prompts import ChatPromptTemplate

prompt = ChatPromptTemplate.from_messages([
    ("system", """
You are a professional Movie Information Extraction Assistant.
Extract useful structured information from a movie 
paragraph and present it in a clean format.
...
"""),
    ("human", "Extract information from this paragraph: {paragraph}")
])

user_input = input("Enter the movie description : ")
final_prompt = prompt.invoke({"paragraph":user_input})
model = init_chat_model(model="gpt-5-mini")
res = model.invoke(final_prompt)
print(res.content)`
    }
  ]
};
