'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

// Mock dos projetos baseados no conteúdo original mas expandidos para o design High-End
const projects = [
  {
    id: '1',
    title: 'Armazém Girassol',
    category: 'Ecommerce High-End',
    description: 'Plataforma robusta de produtos naturais integrada com controle de estoque, vendas e relatórios analíticos em tempo real.',
    image: '/images/ArmazemGirassol-cover.jpg', // Coloque a imagem na pasta public/images/
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
    image: '/images/MyGym-cover.jpg', // Coloque a imagem na pasta public/images/
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
    image: '/images/DepsERP-cover.jpg', // Coloque a imagem na pasta public/images/
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
    <section id="portfolio" ref={containerRef} className="relative bg-[#0a0a0a] pt-16 pb-0">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.05)_0%,transparent_50%)] pointer-events-none" />
      
      {/* Header Estático da Seção */}
      <div className="w-full px-4 md:px-12 pointer-events-none mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          NOSSOS <span className="text-[#2563eb] drop-shadow-[0_0_15px_rgba(37,99,235,0.8)]">PROJETOS</span>
        </h2>
      </div>

      <div className="relative">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.1;
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
  const [isHovered, setIsHovered] = useState(false);
  
  // Otimização 1: Rastrear mouse SEM re-renderizar o React inteiro
  // Usando useMotionValue do Framer Motion, que é ultra-rápido e direto na GPU
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Atualiza os valores diretamente sem causar re-renderização do React
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Simplificado o overlay de escurecimento
  const overlayOpacity = useTransform(progress, range, [0, 0.4]);

  const topOffset = `5vh`;
  const isLast = i === projects.length - 1;
  const shadowClass = isLast ? 'shadow-none' : 'shadow-[0_-30px_40px_-20px_rgba(0,0,0,0.8)]'; // Sombra reduzida

  return (
    <div 
      ref={containerRef} 
      className={`${isLast ? 'h-[100vh]' : 'h-[120vh]'} sticky flex items-start justify-center top-0 pt-4`}
    >
      {/* Otimização 3: Cursor magnético sem mix-blend-difference e com aceleração de hardware */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 rounded-full bg-[#2563eb] pointer-events-none z-[100] items-center justify-center hidden md:flex"
        style={{
          x: useTransform(mouseX, x => x - 48),
          y: useTransform(mouseY, y => y - 48),
          willChange: "transform",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 0.9 : 0,
        }}
        transition={{ type: "tween", duration: 0.15 }}
      >
        <span className="text-white text-xs font-bold tracking-widest uppercase">View</span>
      </motion.div>

      <motion.div 
        style={{ scale, top: topOffset, willChange: "transform" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative w-full max-w-[1400px] h-[75vh] md:h-[80vh] min-h-[500px] bg-[#0a0a0a] rounded-[2rem] md:rounded-[3rem] overflow-hidden ${shadowClass} mx-4 md:mx-auto origin-top group z-10 cursor-none`}
      >
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black z-50 pointer-events-none"
        />
        
        <div className="absolute inset-0 z-0">
          {/* Removido o filtro de blur da imagem que causava gargalo na GPU */}
          <Image 
            src={project.image}
            alt={`${project.title} Cover`}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-700" />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.theme} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none transition-all duration-700 ease-out group-hover:opacity-0 group-hover:-translate-y-8">
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[7rem] font-bold text-white tracking-tighter drop-shadow-2xl text-center px-4 leading-tight">
            {project.title}
          </h3>
          
          <div className="mt-4 sm:mt-8 flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-ping" />
            Passe o mouse para ver o projeto
          </div>
        </div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 md:p-8 pointer-events-none">
          <div className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[80%] xl:max-w-4xl aspect-video rounded-xl md:rounded-2xl border border-white/20 bg-[#121212] shadow-2xl overflow-hidden transition-all duration-700 ease-out translate-y-[10vh] scale-[0.85] opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 relative pointer-events-auto">
            <div className="h-6 sm:h-8 bg-white/10 border-b border-white/10 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2 absolute top-0 w-full z-30">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/80" />
              <div className="ml-2 sm:ml-4 h-3 sm:h-4 flex-1 max-w-[150px] sm:max-w-[200px] bg-white/5 rounded text-[8px] sm:text-[10px] text-zinc-500 flex items-center justify-center truncate">
                {project.link.replace('https://', '')}
              </div>
            </div>
            
            {/* Otimização 5: Substituição do Vídeo por Imagem Estática com Next Image */}
            <div className="absolute top-6 sm:top-8 left-0 w-full h-[calc(100%-24px)] sm:h-[calc(100%-32px)]">
              <Image 
                src={project.image}
                alt={`${project.title} Mockup`}
                fill
                sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 1000px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out pointer-events-none">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#2563eb] text-white rounded-full font-bold pointer-events-auto shadow-lg text-base hover:bg-white hover:text-black transition-colors"
          >
            <span>Ver projeto</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}