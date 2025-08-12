'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CardSwapProps {
  items: {
    id: string;
    title: string;
    description: string;
    image: string;
    tags?: string[];
  }[];
}

export default function CardSwap({ items }: CardSwapProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Cards */}
        <div className="relative w-full md:w-2/3 h-[500px] perspective-1000">
          {items.map((item, index) => {
            // Calcular a posição e rotação com base no índice e no item ativo
            const isActive = index === activeIndex;
            const isNext = (index === activeIndex + 1) || (activeIndex === items.length - 1 && index === 0);
            const isPrev = (index === activeIndex - 1) || (activeIndex === 0 && index === items.length - 1);
            
            let zIndex = 0;
            let transform = '';
            let opacity = 0;
            
            if (isActive) {
              zIndex = 30;
              transform = 'translateX(0) scale(1) rotateY(0)';
              opacity = 1;
            } else if (isNext) {
              zIndex = 20;
              transform = 'translateX(25%) scale(0.9) rotateY(-5deg)';
              opacity = 0.7;
            } else if (isPrev) {
              zIndex = 20;
              transform = 'translateX(-25%) scale(0.9) rotateY(5deg)';
              opacity = 0.7;
            } else {
              zIndex = 10;
              transform = 'translateX(0) scale(0.8) rotateY(0)';
              opacity = 0;
            }
            
            return (
              <div
                key={item.id}
                className={`absolute inset-0 w-full h-full rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer border border-gray-800 shadow-xl`}
                style={{ 
                  zIndex, 
                  transform, 
                  opacity,
                  transitionProperty: 'transform, opacity'
                }}
                onClick={() => handleCardClick(index)}
              >
                <div className="relative w-full h-full">
                  {/* Imagem de fundo */}
                  <div className="absolute inset-0 opacity-60">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    {item.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-3 py-1 text-xs font-medium bg-[#FEAC0E]/20 text-[#FEAC0E] rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Indicadores */}
        <div className="flex md:flex-col gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-[#FEAC0E] scale-125' : 'bg-gray-600 hover:bg-gray-500'}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver projeto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}