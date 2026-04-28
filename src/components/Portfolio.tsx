import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: '1',
    title: 'Consultoria de TI Web',
    category: 'Sistema de Gestão & Financeiro',
    description: 'Substituímos dezenas de planilhas manuais por um sistema completo que automatiza o faturamento e a geração de relatórios. O resultado? Previsibilidade financeira total e zero erros de cálculo.',
    image: '/images/consultoria-cover.png',
    link: 'https://wa.me/5551999832724?text=Olá,%20tenho%20interesse%20em%20uma%20demo%20do%20sistema%20de%20Gestão%20e%20Financeiro.',
    linkText: 'Tenho interesse em uma demo',
    results: [
      { metric: '100%', label: 'Automatizado' },
      { metric: 'Zero', label: 'Uso de planilhas' }
    ],
    technologies: ['Automação', 'Dashboards', 'Gestão Financeira'],
    theme: 'from-[#2563eb]/20 to-transparent'
  },
  {
    id: '2',
    title: 'Armazém Girassol',
    category: 'E-commerce & Controle de Estoque',
    description: 'Desenvolvimento de uma plataforma de vendas online totalmente integrada com o sistema de retaguarda (estoque). Uma solução sob medida para digitalizar a operação de um varejo local.',
    image: '/images/armazem-girassol-cover.jpeg',
    link: 'https://armazem-girassol.vercel.app/',
    linkText: 'Ver projeto completo',
    results: [
      { metric: 'Digital', label: 'Vendas 24/7' },
      { metric: 'Integrado', label: 'Controle de Estoque' }
    ],
    technologies: ['E-commerce', 'Varejo', 'Integração'],
    theme: 'from-emerald-600/20 to-transparent'
  },
  {
    id: '3',
    title: 'Colab+ | RH',
    category: 'Software de Gestão Interna (DP)',
    description: 'Sistema completo para Departamento Pessoal: gestão de colaboradores, cálculo automatizado de impostos e benefícios, checklists de admissão e alertas inteligentes de vencimento de férias e exames (ASO).',
    image: '/images/colab-cover.png',
    link: 'https://colabplus-xi.vercel.app/',
    linkText: 'Ver projeto completo',
    results: [
      { metric: 'Automático', label: 'Cálculo de Impostos' },
      { metric: 'Alertas', label: 'Férias e ASO' }
    ],
    technologies: ['Recursos Humanos', 'Gestão', 'Alertas'],
    theme: 'from-purple-600/20 to-transparent'
  },
  {
    id: '4',
    title: 'Octohub Agência',
    category: 'Landing Page de Alta Conversão',
    description: 'Criação de uma presença digital agressiva e focada em captação de leads, destacando serviços e portfólio de forma magnética para atrair novos contratos.',
    image: '/images/octohub-cover.png',
    link: 'https://octo-hub-site.vercel.app/',
    linkText: 'Ver projeto completo',
    results: [
      { metric: 'Leads', label: 'Captação Ativa' },
      { metric: 'Design', label: 'Foco em Performance' }
    ],
    technologies: ['Web Design', 'Copywriting', 'SEO'],
    theme: 'from-orange-600/20 to-transparent'
  },
  {
    id: '5',
    title: 'Psicóloga Karine Strapazon',
    category: 'Site Profissional (Saúde)',
    description: 'Página focada em conversão para atendimento clínico. Estruturada para transmitir autoridade, acolhimento e facilitar o agendamento de consultas de forma automática.',
    image: '/images/karine-cover.png',
    link: 'https://psicologakarinestrapazon.com/',
    linkText: 'Ver projeto completo',
    results: [
      { metric: 'Direto', label: 'Agendamento WhatsApp' },
      { metric: '100%', label: 'Responsivo (Mobile)' }
    ],
    technologies: ['Saúde', 'Posicionamento', 'Conversão'],
    theme: 'from-pink-600/20 to-transparent'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-[#0a0a0a] pt-16 pb-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.05)_0%,transparent_50%)] pointer-events-none" />
      
      {/* Header Estático da Seção */}
      <div className="w-full px-4 md:px-12 pointer-events-none mb-16 md:mb-24 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          NOSSOS <span className="text-[#2563eb] drop-shadow-[0_0_15px_rgba(37,99,235,0.8)]">PROJETOS</span>
        </h2>
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg">Conheça algumas das empresas que transformaram suas operações e vendas com nossas soluções sob medida.</p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-12 flex flex-col gap-16 md:gap-32">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} i={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, i }: { project: typeof projects[0], i: number }) {
  return (
    <div className="flex flex-col bg-[#121212] rounded-4xl border border-white/5 overflow-hidden group hover:border-[#2563eb]/30 transition-all duration-500 shadow-2xl shadow-black/50">
      {/* Image Container - Proporção Natural para não cortar */}
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full relative block border-b border-white/5 bg-[#0a0a0a] overflow-hidden"
      >
        <Image 
          src={project.image}
          alt={`${project.title} Cover`}
          width={1200}
          height={675}
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
        
        {/* Degradê para fundir a imagem suavemente com o bloco de texto */}
        <div className={`absolute inset-0 bg-linear-to-t from-[#121212] via-transparent to-transparent opacity-80 pointer-events-none`} />
        
        <div className={`absolute inset-0 bg-linear-to-br ${project.theme} opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none`} />
      </a>

      {/* Content Container - Dividido em 2 colunas no desktop */}
      <div className="w-full p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 lg:gap-8 justify-between items-start relative bg-[#121212]">
        
        {/* Esquerda: Título e Descrição */}
        <div className="w-full lg:w-6/12 flex flex-col gap-4">
          <p className="text-[#2563eb] font-medium tracking-wide uppercase text-sm">{project.category}</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">{project.title}</h3>
          <p className="text-zinc-400 text-lg leading-relaxed mt-2">{project.description}</p>
          
          <a 
            href={project.link}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-white hover:text-[#2563eb] font-semibold transition-colors w-fit group/btn"
          >
            {project.linkText || 'Ver projeto completo'}
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </a>
        </div>

        {/* Direita: Métricas e Tecnologias */}
        <div className="w-full lg:w-5/12 flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {project.results.map((result, idx) => (
              <div key={idx} className="flex flex-col gap-1 min-w-0">
                <p className="text-2xl md:text-3xl xl:text-4xl font-bold text-white text-wrap leading-tight">{result.metric}</p>
                <p className="text-sm font-medium text-zinc-500 leading-snug mt-1">{result.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
            {project.technologies.map(tech => (
              <span key={tech} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}