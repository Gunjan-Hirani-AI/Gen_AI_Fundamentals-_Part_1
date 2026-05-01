# Mood Chat AI - Beautiful UI for Vercel Deployment

A beautiful, modern chat UI with 4 mood options (Happy, Sad, Angry, Funny) that can be deployed on Vercel with zero downtime.

## Features

- 🎨 Beautiful dark-themed UI with gradient animations
- 😊😢😠😂 4 Mood options with unique colors
- 💬 Real-time chat with AI
- ⚡ Powered by Next.js API routes
- 🚀 Deploy to Vercel free tier - zero downtime!

## Local Development

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create your environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Add your OpenAI API key to `.env.local`:
   ```
   OPENAI_API_KEY=your_actual_api_key_here
   ```
   Get your API key from: https://platform.openai.com/api-keys

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open http://localhost:3000

## Vercel Deployment

1. Push this code to GitHub

2. Go to https://vercel.com and sign in

3. Click "Add New..." → "Project"

4. Import your GitHub repository

5. In the Environment Variables section, add:
   - Key: `OPENAI_API_KEY`
   - Value: your OpenAI API key

6. Click "Deploy"

That's it! 🎉 Your app will be deployed with:
- ✅ Free hosting on Vercel
- ✅ Zero downtime deployments
- ✅ Global edge network
- ✅ Automatic SSL

## How It Works

1. User selects a mood (Happy/Sad/Angry/Funny)
2. User types a message
3. Frontend calls the Next.js API route
4. API route uses OpenAI with the mood's system prompt
5. Response is displayed in the chat

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Custom CSS (no Tailwind needed)
- **AI**: OpenAI GPT-4o Mini
- **Deployment**: Vercel

## Note

This frontend is separate from your original `angry_sad_happy_funny.py` file. The Python file remains unchanged in the root folder. This Next.js version uses OpenAI directly via API for Vercel compatibility.
