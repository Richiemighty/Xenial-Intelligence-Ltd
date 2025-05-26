// app/api/chat/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Example response — replace with actual OpenAI or chatbot logic
    const userMessage = messages?.[messages.length - 1]?.content || '';

    const reply = `You asked: "${userMessage}". Xenial Intelligence Ltd. specializes in AI-powered software.`;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ reply: 'Sorry, something went wrong.' }, { status: 500 });
  }
}
