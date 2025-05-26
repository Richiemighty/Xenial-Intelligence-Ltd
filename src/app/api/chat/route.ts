import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content.toLowerCase();

    let reply = "I'm not sure how to respond to that. Please ask about Xenial Intelligence Ltd.";

    // === GREETINGS ===
    if (["hi", "hello", "hey", "good morning", "good afternoon", "greetings"].some(greet => lastMessage.includes(greet))) {
      reply = "Hello! 👋 Welcome to Xenial Intelligence Ltd. How can I assist you today?";
    
    // === COMPANY INFO ===
    } else if (
      lastMessage.includes("what does xenial") ||
      lastMessage.includes("about xenial") ||
      lastMessage.includes("who are you") ||
      lastMessage.includes("tell me about xenial") ||
      lastMessage.includes("xenial intelligence ltd")
    ) {
      reply = "Xenial Intelligence Ltd is a dynamic software company specializing in AI-powered solutions. We help businesses transform with artificial intelligence, automation, data analytics, cloud computing, and cybersecurity services.";

    // === SERVICES ===
    } else if (
      lastMessage.includes("services") ||
      lastMessage.includes("what do you offer") ||
      lastMessage.includes("products") ||
      lastMessage.includes("solutions") ||
      lastMessage.includes("do you provide")
    ) {
      reply = "We offer a range of services including:\n AI and machine learning software\n Custom software development\n Cloud solutions\n Cybersecurity\n Data analytics\n IT infrastructure management.";

    // === CONTACT INFO ===
    } else if (
      lastMessage.includes("contact") ||
      lastMessage.includes("reach you") ||
      lastMessage.includes("get in touch") ||
      lastMessage.includes("support")
    ) {
      reply = "You can reach us via our website’s contact form or email us at support@xenialintelligence.com. We’d love to hear from you!";

    // === LOCATION ===
    } else if (
      lastMessage.includes("location") ||
      lastMessage.includes("where are you") ||
      lastMessage.includes("based")
    ) {
      reply = "Xenial Intelligence Ltd is a remote-first company based in Nigeria, but we serve clients globally across multiple industries.";

    // === CAREERS & JOBS ===
    } else if (
      lastMessage.includes("career") ||
      lastMessage.includes("job") ||
      lastMessage.includes("hiring") ||
      lastMessage.includes("vacancy") ||
      lastMessage.includes("work with")
    ) {
      reply = "We’re always open to talented minds! Visit our Careers page or send your CV to careers@xenialintelligence.com.";

    // === TECHNOLOGIES USED ===
    } else if (
      lastMessage.includes("technology") ||
      lastMessage.includes("tech stack") ||
      lastMessage.includes("tools you use")
    ) {
      reply = "We use modern technologies like Python, JavaScript, React, Node.js, TensorFlow, PyTorch, AWS, and Azure for building intelligent, scalable systems.";

    // === INDUSTRIES SERVED ===
    } else if (
      lastMessage.includes("industries") ||
      lastMessage.includes("who do you serve") ||
      lastMessage.includes("clients") ||
      lastMessage.includes("businesses you work with")
    ) {
      reply = "We serve a wide range of industries including finance, healthcare, logistics, education, and e-commerce by providing tailored AI-powered digital solutions.";

    // === VISION OR MISSION ===
    } else if (
      lastMessage.includes("mission") ||
      lastMessage.includes("vision") ||
      lastMessage.includes("goal") ||
      lastMessage.includes("aim")
    ) {
      reply = "Our mission at Xenial Intelligence Ltd is to empower businesses through intelligent automation, drive innovation using AI, and make digital transformation accessible, scalable, and secure.";

    // === PRICING OR COST ===
    } else if (
      lastMessage.includes("pricing") ||
      lastMessage.includes("cost") ||
      lastMessage.includes("how much") ||
      lastMessage.includes("charge")
    ) {
      reply = "Our pricing depends on the scope and complexity of the solution. Contact us with your requirements and we’ll prepare a custom quote tailored to your needs.";

    }

    return NextResponse.json({ reply });

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ reply: "Oops! Something went wrong on the server." }, { status: 500 });
  }
}
