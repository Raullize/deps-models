'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Eye, ArrowUpRight } from 'lucide-react';

// Mock dos projetos baseados no conteúdo original mas expandidos para o design High-End
const projects = [
  {
    id: '1',
    title: 'Armazém Girassol',
    category: 'Ecommerce High-End',
    description: 'Plataforma robusta de produtos naturais integrada com controle de estoque, vendas e relatórios analíticos em tempo real.',
    video: '/videos/ArmazemGirassol.webm',
    link: 'https://armazemgirassol.com',
    results: [
      { metric: '+300%', label: 'em conversões' },
      { metric: 'R$ 2M+', label: 'em vendas' }
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'SEO Avançado'],
    theme: 'from-[#2563eb]/20 to-transparent'
  },
  {
    id: '2',
    title: 'MyGym Academy',
    category: 'Landing Page de Conversão',
    description: 'Experiência digital imersiva projetada para capturar leads e converter visitantes em alunos através de uma interface persuasiva.',
    video: '/videos/MyGym.webm',
    link: 'https://my-gym-academy.vercel.app/',
    results: [
      { metric: '+100%', label: 'em leads' },
      { metric: '+200%', label: 'de matrículas' }
    ],
    technologies: ['React', 'Framer Motion', 'Tailwind', 'Vercel'],
    theme: 'from-purple-600/20 to-transparent'
  },
  {
    id: '3',
    title: 'Deps ERP',
    category: 'Sistema de Gestão SaaS',
    description: 'Solução corporativa para centralizar operações, automatizar o financeiro e gerar relatórios complexos com segurança de nível bancário.',
    video: '/videos/StockDeps.webm',
    link: '#',
    results: [
      { metric: '100%', label: 'automatizado' },
      { metric: 'Zero', label: 'papel' }
    ],
    technologies: ['Next.js 14', 'TypeScript', 'Prisma', 'AWS'],
    theme: 'from-emerald-600/20 to-transparent'
  }
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-[#0a0a0a] pb-32">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.05)_0%,transparent_50%)] pointer-events-none" />
      
      {/* Sticky Header - Fica no topo da tela enquanto o usuário rola a seção inteira */}
      <div className="sticky top-0 w-full z-50 pt-8 md:pt-12 px-4 md:px-12 pointer-events-none h-0">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight pointer-events-auto bg-[#0a0a0a]/80 backdrop-blur-md md:bg-transparent md:backdrop-blur-none inline-block p-2 md:p-0 rounded-lg">
          NOSSOS <span className="text-[#2563eb] drop-shadow-[0_0_15px_rgba(37,99,235,0.8)]">PROJETOS</span>
        </h2>
      </div>

      {/* O container principal que cria o espaço para o scroll (altura = N * 100vh) */}
      <div className="relative w-full pt-[10vh]">
        {projects.map((project, i) => {
          // Increase scaling down effect for much better 3D depth perception
          const targetScale = 1 - ((projects.length - i) * 0.1);
          return (
            <ProjectCard 
              key={project.id} 
              i={i} 
              project={project} 
              progress={scrollYProgress} 
              range={[i * 0.33, 1]} 
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}

function ProjectCard({ project, i, progress, range, targetScale }: { 
  project: typeof projects[0], 
  i: number, 
  progress: MotionValue<number>, 
  range: number[], 
  targetScale: number 
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Conforme a página rola além desse card, ele diminui e perde opacidade
  // We make it much smaller in the back (targetScale) and keep more opacity so it's visible
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [1, 0.7]);
  // Remove blur completely or make it almost invisible so the background items are sharp
  const blur = useTransform(progress, range, ["blur(0px)", "blur(1px)"]);

  // Posição top escalonada para que as cartas fiquem visíveis como um baralho/abas
  const topOffset = `calc(5vh + ${i * 60}px)`;

  return (
    <div ref={containerRef} className="h-[120vh] sticky flex items-start justify-center top-0 pt-24">
      <motion.div 
        style={{ scale, opacity, filter: blur, top: topOffset }}
        className="relative w-full max-w-[1400px] h-[75vh] md:h-[80vh] bg-[#0a0a0a] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_-30px_60px_-20px_rgba(0,0,0,0.9)] mx-4 md:mx-auto origin-top group cursor-pointer"
      >
        {/* Background Cover (Video) */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105 group-hover:blur-[20px]"
          >
            <source src={project.video} type="video/webm" />
            <source src={project.video.replace('.webm', '.mp4')} type="video/mp4" />
          </video>
          {/* Overlay Escurecedor */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:bg-black/60 transition-colors duration-1000" />
          {/* Brilho da cor do projeto */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.theme} opacity-30 group-hover:opacity-50 transition-opacity duration-1000 mix-blend-overlay`} />
        </div>

        {/* Default View (Title Centered & Mockup Peeking) */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
          <h3 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white tracking-tighter drop-shadow-2xl text-center px-4 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-0 group-hover:-translate-y-16">
            {project.title}
          </h3>
        </div>

        {/* Hover View (Mockup in Center) */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 md:p-8 pointer-events-none">
          
          {/* Browser Mockup */}
          <div className="w-full max-w-4xl aspect-video rounded-xl md:rounded-2xl border border-white/20 bg-[#121212] shadow-2xl overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-[45vh] scale-[0.7] opacity-60 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 relative pointer-events-auto">
            {/* Browser Top Bar */}
            <div className="h-8 bg-white/10 border-b border-white/10 flex items-center px-4 gap-2 absolute top-0 w-full z-30">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <div className="ml-4 h-4 flex-1 max-w-[200px] bg-white/5 rounded text-[10px] text-zinc-500 flex items-center justify-center truncate">
                {project.link.replace('https://', '')}
              </div>
            </div>
            
            {/* Mockup Video */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute top-8 left-0 w-full h-[calc(100%-32px)] object-cover"
            >
              <source src={project.video} type="video/webm" />
              <source src={project.video.replace('.webm', '.mp4')} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Key Info & Button (Floating Right) */}
        <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-6 opacity-0 translate-x-12 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] delay-100 pointer-events-none">
          
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl w-72 shadow-2xl">
            <span className="text-[#2563eb] text-xs font-mono font-bold tracking-wider uppercase mb-2 block">
              {project.category}
            </span>
            <h4 className="text-2xl font-bold text-white mb-6 leading-tight">
              Resultados <br/>Alcançados
            </h4>
            
            <div className="flex flex-col gap-5 mb-8">
              {project.results.map((result, idx) => (
                <div key={idx} className="flex flex-col border-l-2 border-[#2563eb]/50 pl-4">
                  <span className="text-3xl font-black text-white leading-none">{result.metric}</span>
                  <span className="text-sm text-zinc-400 mt-1">{result.label}</span>
                </div>
              ))}
            </div>

            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-6 py-4 bg-[#2563eb] text-white rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 pointer-events-auto group/btn shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
            >
              <span>View work</span>
              <Eye className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
            </a>
          </div>

        </div>

        {/* Mobile View Button (Visible only on small screens) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 md:hidden opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#2563eb] text-white rounded-full font-bold pointer-events-auto shadow-[0_0_20px_rgba(37,99,235,0.5)]"
          >
            <span>View work</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

      </motion.div>
    </div>
  );
}