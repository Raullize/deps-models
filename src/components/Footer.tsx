import Link from 'next/link';
import { Instagram, Linkedin, Mail, Phone, MapPin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="pt-16 pb-8 border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo e descrição */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white mb-4 inline-block">
              <span className="text-[#FEAC0E]">DEPS</span> MODELS
            </Link>
            <p className="text-gray-400 mb-6">
              Design, Efetividade, Produtividade e Simplicidade para transformar sua presença digital.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://www.instagram.com/depsmodels/" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="https://www.linkedin.com/company/depsmodels/" icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink href="https://github.com/depsModels" icon={<Github size={18} />} label="GitHub" />
            </div>
          </div>
          
          {/* Links rápidos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#portfolio">Portfólio</FooterLink>
              <FooterLink href="#services">Serviços</FooterLink>
              <FooterLink href="#about">Sobre Nós</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
            </ul>
          </div>
          
          {/* Serviços */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Landing Pages</FooterLink>
              <FooterLink href="#">E-commerce</FooterLink>
              <FooterLink href="#">Aplicativos Web</FooterLink>
              <FooterLink href="#">Design UI/UX</FooterLink>
              <FooterLink href="#">Sites Responsivos</FooterLink>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-[#FEAC0E] mr-2 mt-1" />
                <span className="text-gray-400">Rio Grande do Sul, Brasil</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-[#FEAC0E] mr-2" />
                <span className="text-gray-400">+55 51 9983-2724</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-[#FEAC0E] mr-2" />
                <span className="text-gray-400">depsmodels@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Linha divisória */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} DEPS Models. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-500 text-sm hover:text-[#FEAC0E] transition-colors">
                Termos de Uso
              </Link>
              <Link href="#" className="text-gray-500 text-sm hover:text-[#FEAC0E] transition-colors">
                Política de Privacidade
              </Link>
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
      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#FEAC0E] hover:text-black transition-colors duration-200"
      aria-label={label}
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
        className="text-gray-400 hover:text-[#FEAC0E] transition-colors duration-200"
      >
        {children}
      </Link>
    </li>
  );
}