'use client';

import { useState } from 'react';
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function VoiceAssistant() {
  const [botReply, setBotReply] = useState(
    "I'm ready when you are. Ask me anything about Xenial Intelligence Ltd."
  );
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const speak = (text: string) => {
    if (!('speechSynthesis' in window)) {
      console.log('Speech synthesis not supported in this browser.');
      return;
    }

    const synth = window.speechSynthesis;

    if (synth.speaking) {
      console.log('SpeechSynthesis is already speaking.');
      return;
    }

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'en-US';

    // Pick a suitable voice for English, if available
    const voices = synth.getVoices();
    const voice = voices.find((v) => v.lang.startsWith('en'));
    if (voice) {
      utter.voice = voice;
    }

    utter.onerror = (event) => {
      console.error('SpeechSynthesisUtterance error:', event.error);
    };

    synth.speak(utter);
  };

  const handleStart = () => {
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleStop = async () => {
    SpeechRecognition.stopListening();

    if (transcript.trim()) {
      const userMessage = { role: 'user', content: transcript.trim() };
      const systemMessage = { role: 'assistant', content: botReply };

      try {
        type ChatResponse = { reply: string };

        const response = await axios.post<ChatResponse>('/api/chat', {
          messages: [systemMessage, userMessage],
        });

        const reply = response.data.reply;
        setBotReply(reply);

        // Delay speaking slightly to ensure mobile browsers allow it
        setTimeout(() => speak(reply), 150);
      } catch {
        const errorMsg = 'Sorry, something went wrong.';
        setBotReply(errorMsg);
        setTimeout(() => speak(errorMsg), 150);
      }
    }
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">🗣️ Xenial Voice Assistant</h1>
      <p>
        <strong>Status:</strong> {listening ? '🎙️ Listening...' : '🛑 Not Listening'}
      </p>

      <div className="my-4 p-4 bg-gray-800 rounded">
        <p>
          <strong>You said:</strong> {transcript || 'Say something...'}
        </p>
        <p className="mt-2">
          <strong>Bot replied:</strong> {botReply}
        </p>
      </div>

      <div className="mt-4 flex gap-2">
        <button className="bg-accent px-4 py-2 rounded" onClick={handleStart}>
          Start Talking
        </button>
        <button className="bg-red-600 px-4 py-2 rounded" onClick={handleStop}>
          Stop & Respond
        </button>
        <button
          className="bg-gray-600 px-4 py-2 rounded"
          onClick={() => {
            resetTranscript();
            setBotReply('Reset. Ask me anything about Xenial.');
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
