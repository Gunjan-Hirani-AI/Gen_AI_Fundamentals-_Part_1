## 🚀 Generative AI Fundamentals - Part 1

Welcome to my **Generative AI Fundamentals** repository! This is a foundational project where I explored the core concepts of Generative AI by integrating and interacting with various top-tier Large Language Models (LLMs) via the LangChain framework.

This project served as my stepping stone into the world of GenAI, giving me the hands-on experience needed to build a strong foundation and the confidence to develop complex AI applications.

## 🎯 Project Overview

In this project, I focused on making API calls and seamlessly integrating multiple industry-leading LLMs. I built interactive **Command Line Interface (CLI) applications** to test and understand how these models process prompts, generate embeddings, and maintain conversational context.

### 🧠 Specific Models Explored
- **OpenAI:** `gpt-5`, `gpt-5-mini`, `text-embedding-3-small`
- **Google Gemini:** `gemini-2.5-flash-lite`
- **Mistral AI:** `mistral-large-latest`
- **Groq:** `openai/gpt-oss-120b` (for ultra-fast free inference)
- **Hugging Face:** `Mistral-7B-Instruct-v0.2` (via HuggingFaceEndpoint)

---

## 📂 File-by-File Breakdown

Here is exactly what I built and learned in each script, kept lightweight for easy reading:

### 🤖 Chat Models (`/chatmodels`)
- **`init_chat_model_chatgpt.py`**: Initializes the **GPT-5** model. Explores parameter tuning like `temperature=0.9` for creativity and `max_tokens` for response length control.
- **`init_chat_model_gemini.py`**: Integrates Google's **Gemini 2.5 Flash Lite** model using the `google_genai` provider for lightning-fast responses.
- **`init_chat_model_gork.py`**: Uses the **Groq API** to run the massive `gpt-oss-120b` model for free, showcasing alternative high-speed inference engines.
- **`init_chat_model_mistral.py`**: Implements **Mistral Large Latest** with a custom temperature to test its reasoning and creative writing capabilities.
- **`huggingface.py`**: Connects to the Hugging Face Hub API to run open-source models like **Mistral-7B-Instruct** directly via LangChain's `HuggingFaceEndpoint`.

### 🔢 Embeddings & Advanced Prompts (`/embeddings`)
- **`chatgpt_basic_embeddings.py`**: My introduction to semantic search. Converts plain text into 64-dimensional numerical vectors using OpenAI's `text-embedding-3-small`.
- **`chatgpt_terminal_base_embeddings.py`**: A hybrid CLI app that generates text embeddings while simultaneously chatting with **GPT-5-mini** (V1 implementation).
- **`chatgpt_terminal_base_embeddings2.py`**: V2 of the CLI chat app. Upgrades the logic by using formal LangChain message objects (`SystemMessage`, `HumanMessage`, `AIMessage`) to maintain conversational memory and context.
- **`angry_sad_happy_funny.py`**: A multi-persona terminal application! Lets the user pick an AI mood (Happy, Sad, Angry, Funny) and chat with **GPT-5-mini** while it strictly maintains the selected persona.
- **`template_prompts.py`**: Explores prompt engineering using `ChatPromptTemplate` to structure reusable system instructions and user inputs.
- **`structured_output_prompts.py`**: Advanced data extraction. Combines **GPT-5-mini** with `PydanticOutputParser` to read a messy paragraph and output strictly validated JSON data (e.g., extracting a structured `Movie` object).

---

## 🖥️ Companion Frontend Dashboard

To document my journey, I also built a **custom frontend dashboard** (using Next.js and React). This web interface visually organizes my learnings on a file-by-file basis. It displays the exact code, the specific libraries used, input/output examples, and the key takeaways from every single Python script listed above.

## 🎥 Video Demonstration (Highly Recommended!)

*To get the best idea of how this project works and to see the frontend dashboard and CLI apps in action, please check out the video demonstration below:*

** 👉watch the Video Demonstration : https://www.loom.com/share/0f9016fa99d840eb9eb0f82003586ad8** 

---
*Built by Gunjan Hirani with a drive to master Generative AI.*
