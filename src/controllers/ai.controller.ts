import { GoogleGenerativeAI } from '@google/generative-ai';
import { Request, Response } from 'express';
import config from '../config';

const generateDescription = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: 'Event title is required to generate a description',
      });
    }

    if (!config.gemini_api_key) {
      return res.status(500).json({
        success: false,
        message: 'Gemini API key is not configured',
      });
    }

    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(config.gemini_api_key as string);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `Write a catchy and informative event description for an event titled: "${title}". Keep it around 100 words.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({
      success: true,
      message: 'Description generated successfully',
      data: text,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to generate description',
      error: err.message,
    });
  }
};

export const aiControllers = {
  generateDescription,
};
