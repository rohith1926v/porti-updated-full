import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Terminal, Minus } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "System initialized. How can I assist you with Rohith's data?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const response = await sendMessageToGemini(userMessage);

    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-zinc-800 text-zinc-400 rotate-90' : 'bg-lime-400 text-black shadow-[0_0_20px_rgba(163,230,53,0.5)]'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-4 md:right-8 z-40 w-[90vw] md:w-[380px] bg-black/90 backdrop-blur-md rounded-lg border border-lime-400/30 shadow-2xl flex flex-col overflow-hidden animate-fade-in-up font-mono">
          {/* Terminal Header */}
          <div className="bg-zinc-900/80 p-3 flex items-center justify-between border-b border-lime-400/20">
            <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-lime-400" />
                <span className="text-xs text-lime-400 font-bold tracking-wider">AI_ASSISTANT.exe</span>
            </div>
            <div className="flex gap-2">
                <Minus className="w-4 h-4 text-zinc-600 cursor-pointer hover:text-white" onClick={() => setIsOpen(false)} />
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-[400px] space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <span className="text-[10px] text-zinc-600 mb-1">
                    {msg.role === 'user' ? 'USR' : 'SYS'}
                </span>
                <div className={`p-3 text-xs md:text-sm max-w-[85%] ${
                  msg.role === 'user' 
                    ? 'bg-lime-400/10 text-lime-400 border border-lime-400/20 rounded-l-lg rounded-tr-lg' 
                    : 'bg-zinc-800 text-zinc-300 rounded-r-lg rounded-tl-lg'
                }`}>
                  <span className="mr-2 opacity-50">{msg.role === 'user' ? '>' : '#'}</span>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex items-start flex-col">
                  <span className="text-[10px] text-zinc-600 mb-1">SYS</span>
                  <div className="bg-zinc-800 text-lime-400 p-3 rounded-r-lg rounded-tl-lg text-xs animate-pulse">
                    PROCESSING_REQUEST...
                  </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-zinc-900/50 border-t border-white/5">
            <div className="flex gap-2 bg-black border border-zinc-700 rounded px-3 py-2 focus-within:border-lime-400 transition-colors">
              <span className="text-lime-400 animate-pulse">{'>'}</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Enter command..."
                className="flex-1 bg-transparent border-none text-white text-sm focus:outline-none font-mono"
                autoFocus
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                className="text-zinc-500 hover:text-lime-400 disabled:opacity-30 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;