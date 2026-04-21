'use client';

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [message, setMessage] = useState('');
  const phoneNumber = '5551999832724';
  
  const handleSend = () => {
    const textToSend = message.trim() === '' 
      ? 'Olá! Gostaria de saber mais sobre os serviços da DEPS Models.' 
      : message;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank');
    setMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {/* Balão de Saudação (Default View) */}
        {!isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-[72px] bottom-1 whitespace-nowrap bg-white text-zinc-800 px-5 py-3 rounded-2xl rounded-br-sm shadow-xl font-medium text-sm flex items-center gap-2 pointer-events-none"
          >
            <span className="text-lg">👋</span>
            Olá! Fale conosco.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex items-center justify-end h-[60px]">
        {/* Container do Input Expansível (Hover View) */}
        <div 
          className={`absolute right-0 flex items-center bg-white rounded-full shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden ${
            isHovered ? 'w-[300px] sm:w-[350px] pr-16 opacity-100' : 'w-14 pr-0 opacity-0'
          }`}
          style={{ height: '60px' }}
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Digite sua mensagem..."
            className="w-full h-full pl-6 pr-2 bg-transparent text-zinc-800 placeholder-zinc-400 focus:outline-none text-sm sm:text-base"
          />
        </div>

        {/* Botão Principal (Alterna entre Logo do WPP e Seta de Envio) */}
        <button
          onClick={handleSend}
          className="relative w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:bg-[#20BA5C] transition-colors duration-300 z-10 group"
          aria-label="Contato via WhatsApp"
        >
          {/* Seta de Envio (Visível apenas no hover) */}
          <Send 
            size={24} 
            className={`absolute text-white transition-all duration-300 ${
              isHovered ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-45'
            }`} 
          />
          
          {/* Logo do WhatsApp (Invisível no hover) */}
          <FaWhatsapp 
            size={34} 
            className={`absolute text-white transition-all duration-300 ${
              isHovered ? 'opacity-0 scale-50 rotate-45' : 'opacity-100 scale-100 rotate-0'
            }`} 
          />
        </button>
      </div>
    </div>
  );
}