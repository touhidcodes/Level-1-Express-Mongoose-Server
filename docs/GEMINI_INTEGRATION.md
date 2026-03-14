# 🤖 Google Gemini AI Integration Guide

This guide explains how to add AI capabilities to your Express server using Google Gemini. We use it here to automatically generate event descriptions based on a title.

---

## 🔑 Step 1: Get Your API Key

1.  Go to the [Google AI Studio](https://aistudio.google.com/).
2.  Login with your Google account.
3.  Click on **"Get API key"** in the sidebar.
4.  Copy your API key. **(Keep it secret! Never share it publicly.)**

---

## 📦 Step 2: Install the Package

In your project terminal, run the following command to install the official Google AI SDK:

```bash
npm install @google/generative-ai
```

---

## ⚙️ Step 3: Configure Environment Variables

Open your `.env` file and add your API key:

```env
GEMINI_API_KEY=your_actual_api_key_here
```

Then, ensure it is mapped in your `src/config/index.ts` folder:

```typescript
export default {
  // ... other configs
  gemini_api_key: process.env.GEMINI_API_KEY,
};
```

---

## 🛠️ Step 4: Create the AI Controller

Create a file at `src/controllers/ai.controller.ts`. This file will handle the logic of talking to Gemini.

```typescript
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Request, Response } from 'express';
import config from '../config';

const generateDescription = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    // Initialize the AI
    const genAI = new GoogleGenerativeAI(config.gemini_api_key as string);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `Write a catchy description for an event titled: "${title}"`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.status(200).json({
      success: true,
      data: text,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const aiControllers = { generateDescription };
```

---

## 🛣️ Step 5: Set Up Routes

1.  Create `src/routes/ai.route.ts` and link it to the controller.
2.  Add the route to your central router in `src/routes/index.ts`.

```typescript
// src/routes/index.ts
const moduleRoutes = [
  // ... other routes
  {
    path: '/ai',
    route: AiRoutes,
  },
];
```

---

## 🚀 How to Test it

Use a tool like **Postman** or **Thunder Client**:

*   **Method**: `POST`
*   **URL**: `http://localhost:5000/api/v1/ai/generate-description`
*   **Body (JSON)**:
    ```json
    {
      "title": "Summer Music Festival"
    }
    ```

Gemini will respond with an AI-generated description! 🎊
