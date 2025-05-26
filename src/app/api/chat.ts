// app/api/chat/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content.toLowerCase();

    let reply = "I'm not sure how to respond to that. Please ask about Xenial Intelligence Ltd.";

    // Simple keyword-based matching
    if (["hi", "hello", "hey", "good morning", "good afternoon"].some(greet => lastMessage.includes(greet))) {
      reply = "Hello! 👋 Welcome to Xenial Intelligence Ltd. How can I assist you today?";
    } else if (lastMessage.includes("what does xenial") || lastMessage.includes("about xenial") || lastMessage.includes("who are you")) {
      reply = "Xenial Intelligence Ltd is a dynamic software development company that specializes in AI-powered solutions and IT services. We help businesses automate and innovate using AI, machine learning, cloud computing, cybersecurity, and more.";
    } else if (lastMessage.includes("services") || lastMessage.includes("offer") || lastMessage.includes("do you provide")) {
      reply = "We offer AI-driven software development, machine learning solutions, cloud computing, cybersecurity, data analytics, and full IT infrastructure management.";
    } else if (lastMessage.includes("contact") || lastMessage.includes("reach you")) {
      reply = "You can reach Xenial Intelligence Ltd via our website’s contact form or email us at support@xenialintelligence.com.";
    } else if (lastMessage.includes("location") || lastMessage.includes("where are you based")) {
      reply = "We are a remote-first company with global clients, but our headquarters is in Nigeria.";
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ reply: "Oops! Something went wrong." }, { status: 500 });
  }
}
