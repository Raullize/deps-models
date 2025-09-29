'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('PT');

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'PT' ? 'EN' : 'PT');
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-white hover:text-gray-300 transition-colors">
            <Image 
              src="/logos/logoIcon.png" 
              alt="DEPS Models Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8"
            />
            <span>
              <span className="text-[#FEAC0E]">DEPS</span> MODELS
            </span>
          </Link>
          
          {/* Links de navegação em desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#portfolio">Portfólio</NavLink>
            <NavLink href="#services">Serviços</NavLink>
            <NavLink href="#about">Sobre Nós</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#contact">Contato</NavLink>
            
            {/* Seletor de Idioma */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10 cursor-pointer"
              aria-label="Mudar idioma"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span className="text-sm font-medium transition-all duration-300">
                {currentLanguage}
              </span>
            </button>
          </div>
          
          {/* Menu mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 hover:text-gray-300 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Menu mobile expandido */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md py-4 px-4 flex flex-col items-center space-y-4">
            <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfólio</NavLink>
            <NavLink href="#services" onClick={() => setIsMenuOpen(false)}>Serviços</NavLink>
            <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>Sobre Nós</NavLink>
            <NavLink href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</NavLink>
            <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</NavLink>
            
            {/* Seletor de Idioma Mobile */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10 cursor-pointer"
              aria-label="Mudar idioma"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span className="text-sm font-medium">
                {currentLanguage === 'PT' ? 'Português' : 'English'}
              </span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link 
      href={href} 
      className="text-gray-300 hover:text-white transition-colors duration-200 font-medium p-2 rounded-lg hover:bg-white/10"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}