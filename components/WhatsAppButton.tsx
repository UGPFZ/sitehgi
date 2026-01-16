
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const whatsappUrl = "https://wa.me/5519993889342?text=Boa%20tarde%2C%20vim%20pelo%20site%20HGI%20Zambonini%2C%20gostaria%20de%20realizar%20um%20pedido.";
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center"
      aria-label="Pedir no WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-bold ml-0 group-hover:ml-2">
        Pedir Agora
      </span>
    </a>
  );
};

export default WhatsAppButton;
