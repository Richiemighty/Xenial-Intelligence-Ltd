'use client';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function VoiceAssistant() {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const handleSpeak = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎤 Voice Assistant</h1>
      <p>Listening: {listening ? "Yes" : "No"}</p>
      <p className="mt-4 p-4 bg-gray-700 rounded">{transcript || "Say something..."}</p>
      <div className="mt-4 flex gap-2">
        <button className="bg-accent px-4 py-2 rounded" onClick={handleSpeak}>Start</button>
        <button className="bg-red-500 px-4 py-2 rounded" onClick={handleStop}>Stop</button>
        <button className="bg-gray-500 px-4 py-2 rounded" onClick={resetTranscript}>Reset</button>
      </div>
    </div>
  );
}
