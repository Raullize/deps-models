'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '#services', label: 'Soluções' },
  { href: '#portfolio', label: 'Projetos' },
  { href: '#process', label: 'Processo' },
  { href: '#faq', label: 'Dúvidas' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string>('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-transparent/5' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="relative flex items-center justify-center h-24">
          {/* Logo */}
          <Link href="/" className="absolute left-0 flex items-center">
            <Image
              src="/logos/logo-icon-2.png"
              alt="DEPS Models Logo"
              width={100}
              height={100}
              priority
              className="w-[100px] h-auto"
            />
          </Link>

          {/* Links de navegação */}
          <div
            className="hidden md:flex items-center space-x-2 bg-gray-800 rounded-lg px-6"
            onMouseLeave={() => setHoveredLink('#home')}
          >
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-base transition-colors ${hoveredLink === link.href ? 'text-white' : 'text-gray-400 hover:text-white'}`}
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
                <span className="relative z-10 block px-4 py-3">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="absolute right-0 flex items-center">
            <Link
              href="#contact"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-2.5 rounded-full font-medium transition-colors duration-200"
            >
              Falar com Especialista
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}