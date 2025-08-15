'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#portfolio">Portfólio</NavLink>
            <NavLink href="#services">Serviços</NavLink>
            <NavLink href="#about">Sobre Nós</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#contact">Contato</NavLink>
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
      className="text-gray-300 hover:text-white transition-colors duration-200 font-medium relative group"
      onClick={onClick}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
    </Link>
  );
}