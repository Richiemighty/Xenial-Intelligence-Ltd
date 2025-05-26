// /pages/api/chat.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { messages } = req.body;

    // Just return a static response for now (mock chatbot)
    const lastMessage = messages[messages.length - 1].content;

    const response = {
      reply: `You said: "${lastMessage}" – Thanks for reaching Xenial Intelligence Ltd!`
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ reply: 'Internal Server Error' });
  }
}
