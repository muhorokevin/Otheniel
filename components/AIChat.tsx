
import React, { useState, useRef, useEffect } from 'react';
import { getImmigrationAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Jambo! I am your Otheniel Ent Assistant. We handle the entire application and follow-up process for you. What would you like us to file for you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getImmigrationAdvice(messages, input);
      setMessages(prev => [...prev, { role: 'model', text: response || 'Sorry, I couldn\'t process that request.' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'I am having trouble connecting to my knowledge base. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col h-[600px]">
      <div className="bg-blue-600 p-6 flex items-center justify-between">
        <div className="flex items-center">
            <div className="bg-blue-500 p-2 rounded-full mr-3 animate-pulse">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            </div>
            <div>
                <h2 className="text-white font-bold text-lg">Ask an Otheniel Ent Agent</h2>
                <p className="text-blue-100 text-xs">Full-Service Filing & Follow-up</p>
            </div>
        </div>
        <div className="text-xs text-blue-200 italic hidden sm:block">
            Direct Portal Liaison
        </div>
      </div>

      <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4 bg-slate-50">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
            }`}>
              <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl border border-slate-100 flex space-x-2 items-center">
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-100 flex space-x-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask us about filing your permit..."
          className="flex-grow p-3 bg-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-md"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>
      <div className="bg-slate-50 px-6 py-2 border-t border-slate-100">
        <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-semibold">
          Disclaimer: All advice is based on the Kenya Citizenship and Immigration Act. Approvals are statutory government decisions.
        </p>
      </div>
    </div>
  );
};

export default AIChat;
