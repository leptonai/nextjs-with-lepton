'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialInput: "Tell me a joke!"
  });
  
  return (
    <div className="flex flex-col w-full max-w-md pb-20 mx-auto stretch">
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap dark:text-gray-100 mb-4">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}
      
      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
