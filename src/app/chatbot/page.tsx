'use client';
import { useState } from 'react';
import axios from 'axios';

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! Ask me anything about Xenial Intelligence Ltd.' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      type ChatResponse = { reply: string };
      const response = await axios.post<ChatResponse>('/api/chat', {
        messages: newMessages
      });

      setMessages([...newMessages, { role: 'assistant', content: response.data.reply }]);
    } catch (err) {
      setMessages([...newMessages, { role: 'assistant', content: 'Oops! Something went wrong.' }]);
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <div className="h-[70vh] overflow-y-auto space-y-2 bg-gray-800 p-4 rounded text-white">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
            <p className="bg-gray-700 inline-block px-4 py-2 rounded">{m.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <input
          className="flex-1 px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={sendMessage} className="bg-accent px-4 py-2 rounded">Send</button>
      </div>
    </div>
  );
}
