'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = '5551999832724'; // Número atualizado
  const message = 'Olá! Gostaria de saber mais sobre os serviços da DEPS Models.'; // Mensagem pré-definida
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BA5C] transition-colors duration-300 hover:scale-110 transform transition-transform"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp size={32} className="text-white" />
      
      {/* Efeito de pulso */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
    </button>
  );
}