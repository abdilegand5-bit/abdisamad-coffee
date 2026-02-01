
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MENU_ITEMS } from '../constants';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-3-flash-preview';
      
      const menuContext = MENU_ITEMS.map(item => `${item.name} ($${item.price}): ${item.description}`).join('\n');
      const prompt = `
        You are the Head Barista and Coffee Sommelier at "Abdisamad Coffee House".
        A customer is asking for a recommendation.
        
        Our Menu:
        ${menuContext}
        
        Customer says: "${userMessage}"
        
        Recommend 1 or 2 items from our menu that best fit their mood or taste. 
        Be professional, sophisticated, and warm. Mention flavor notes.
        Keep your response concise (max 3 sentences).
      `;

      const response = await ai.models.generateContent({
        model,
        contents: prompt
      });

      setMessages(prev => [...prev, { role: 'ai', content: response.text || "I'm sorry, I couldn't brew an answer. Try again?" }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'ai', content: "Our coffee machine is acting up! Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[60] bg-primary text-white size-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group"
      >
        <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">robot_2</span>
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded-full animate-bounce">AI</div>
      </button>

      {/* Chat UI */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 z-[60] w-[350px] md:w-[400px] max-h-[500px] bg-white dark:bg-[#2d2118] border border-[#e6dad1] dark:border-[#3d2b1f] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="p-4 bg-primary text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined">coffee_maker</span>
              <div>
                <h4 className="font-bold text-sm">Coffee Sommelier</h4>
                <p className="text-[10px] opacity-80 uppercase tracking-widest">Powered by Gemini AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-background-light dark:bg-background-dark min-h-[300px]"
          >
            {messages.length === 0 && (
              <div className="text-center py-10 opacity-60">
                <span className="material-symbols-outlined text-4xl mb-2 text-primary">local_cafe</span>
                <p className="text-sm font-light italic">"Tell me your mood or taste preference, and I'll find your perfect cup."</p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none shadow-md' 
                    : 'bg-[#f3ece8] dark:bg-[#3d2b1f] text-coffee-dark dark:text-white rounded-bl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#f3ece8] dark:bg-[#3d2b1f] p-3 rounded-2xl rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="size-1.5 bg-primary rounded-full animate-bounce"></div>
                    <div className="size-1.5 bg-primary rounded-full animate-bounce delay-75"></div>
                    <div className="size-1.5 bg-primary rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleAskAI} className="p-4 border-t border-[#e6dad1] dark:border-[#3d2b1f] bg-white dark:bg-[#2d2118]">
            <div className="flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="I want something bold but sweet..."
                className="flex-1 bg-background-light dark:bg-background-dark border-none rounded-lg text-sm focus:ring-1 focus:ring-primary py-2 px-3"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-xl">send</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AIConsultant;
