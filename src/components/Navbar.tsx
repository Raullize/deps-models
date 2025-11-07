'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TbWorld } from 'react-icons/tb';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#services', label: 'Serviços' },
  { href: '#about', label: 'Sobre Nós' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contato' },
];

export default function Navbar() {
  const [currentLanguage, setCurrentLanguage] = useState('PT');
  const [hoveredLink, setHoveredLink] = useState<string>('#home');

  const toggleLanguage = () => {
    setCurrentLanguage(prev => (prev === 'PT' ? 'EN' : 'PT'));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="relative flex items-center justify-center h-24">
          {/* Logo */}
          <Link href="/" className="absolute left-0 flex items-center">
            <Image
              src="/logos/logo-icon-2.png"
              alt="DEPS Models Logo"
              width={100}
              height={100}
              className=""
            />
          </Link>

          {/* Links de navegação */}
          <div
            className="hidden md:flex items-center space-x-2 bg-gray-800 rounded-lg px-3"
            onMouseLeave={() => setHoveredLink('#home')}
          >
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm transition-colors ${hoveredLink === link.href ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                onMouseEnter={() => setHoveredLink(link.href)}
              >
                {hoveredLink === link.href && (
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 bg-blue-500"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <span className="relative z-10 block px-4 py-2">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Seletor de Idioma */}
          <div className="absolute right-0 flex items-center">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10 cursor-pointer"
              aria-label="Mudar idioma"
            >
              <TbWorld className="w-5 h-5" />
              <span className="text-sm font-medium transition-all duration-300">
                {currentLanguage}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}