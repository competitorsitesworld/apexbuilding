import React, { useState } from 'react';
import { Bot, Send, Sparkles, User, Loader2 } from 'lucide-react';
import { getConstructionAdvice } from '../services/geminiService';
import { ChatMessage, ChatRole } from '../types';

export const AiConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: ChatRole.MODEL, text: "Hi! I'm ApexBot. I can help with rough project estimates, material advice, or construction questions. What are you planning?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: ChatRole.USER, text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getConstructionAdvice(userMsg);
    
    setMessages(prev => [...prev, { role: ChatRole.MODEL, text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Info */}
        <div className="flex-1 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold mb-6">
            <Sparkles size={16} />
            <span>AI Powered Consultant</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Got a Project in Mind? Ask ApexBot.</h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Not ready for a full quote yet? Use our AI assistant to get instant ballpark estimates on costs, timelines, and materials for your renovation or build.
          </p>
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-slate-800 rounded-lg text-amber-500">
               <Bot size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg">Instant Answers</h4>
              <p className="text-slate-400 text-sm">24/7 availability for all your construction queries.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Chat Interface */}
        <div className="flex-1 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
          {/* Chat Header */}
          <div className="bg-slate-800 p-4 flex items-center gap-3 border-b border-slate-700">
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white">
              <Bot size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold">ApexBot</h3>
              <p className="text-slate-400 text-xs flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> Online
              </p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.role === ChatRole.USER ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white ${msg.role === ChatRole.USER ? 'bg-slate-700' : 'bg-amber-500'}`}>
                   {msg.role === ChatRole.USER ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`p-3 rounded-lg text-sm max-w-[80%] ${msg.role === ChatRole.USER ? 'bg-slate-700 text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white">
                   <Bot size={16} />
                 </div>
                 <div className="bg-white border border-slate-200 p-3 rounded-lg rounded-tl-none shadow-sm flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-slate-500" />
                    <span className="text-slate-500 text-xs">Thinking...</span>
                 </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="E.g., Cost to remodel a small kitchen?"
              className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="p-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};