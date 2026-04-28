import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Github, ArrowUpRight, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative pt-24 pb-8 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
      {/* Background Decorators */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2563eb]/30 to-transparent" />
      <div className="absolute top-0 right-0 w-1/3 h-64 bg-[#2563eb] rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 items-end text-center md:text-left">
          
          {/* Brand Col (Takes 5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between items-center md:items-start">
            <div className="flex flex-col items-center md:items-start">
              <Link href="/" className="inline-block mb-8 hover:opacity-80 transition-opacity">
                <Image 
                  src="/logos/logo-icon-2.png" 
                  alt="DEPS Models Logo" 
                  width={140} 
                  height={140} 
                  className="w-[140px] h-auto"
                />
              </Link>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight max-w-sm">
                Não criamos apenas sites. Construímos <span className="text-[#2563eb]">ecossistemas digitais</span>.
              </h3>
            </div>
            
            <div className="mt-8 lg:mt-0 flex justify-center md:justify-start w-full">
              <a 
                href="https://wa.me/5551999832724?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20DEPS%20Models." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center md:justify-start gap-2 text-xl md:text-2xl font-light text-zinc-300 hover:text-white transition-colors group"
              >
                Falar no WhatsApp
                <ArrowUpRight className="w-5 h-5 text-[#2563eb] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Empty Space for Grid alignment */}
          <div className="hidden lg:block lg:col-span-4"></div>
          
          {/* Navigation Col (Takes 3 columns) */}
          <div className="lg:col-span-3 flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-8 opacity-50">Navegação</h4>
            <ul className="space-y-4 flex flex-col items-center md:items-start">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#services">Nossas Soluções</FooterLink>
              <FooterLink href="#portfolio">Projetos Recentes</FooterLink>
              <FooterLink href="#process">Como Trabalhamos</FooterLink>
              <FooterLink href="#faq">Dúvidas Frequentes</FooterLink>
            </ul>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6 text-center md:text-left">
          <p className="text-zinc-500 text-sm font-light">
            &copy; {currentYear} DEPS Models. Todos os direitos reservados.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 md:pr-24 lg:pr-32">
            <Link 
              href="/#home"
              className="text-sm font-medium text-zinc-400 hover:text-white flex items-center gap-2 transition-colors group"
            >
              Voltar ao topo 
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </Link>

            {/* Socials */}
            <div className="flex space-x-3">
              <SocialLink href="https://www.instagram.com/depsmodels/" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="https://www.linkedin.com/company/depsmodels/" icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink href="https://github.com/depsModels" icon={<Github size={18} />} label="GitHub" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-zinc-400 hover:text-white transition-colors duration-300 text-base font-light flex items-center group"
      >
        <span className="w-0 h-[1px] bg-[#2563eb] mr-0 group-hover:w-3 group-hover:mr-3 transition-all duration-300"></span>
        {children}
      </Link>
    </li>
  );
}