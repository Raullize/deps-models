import CardSwap from '@/components/CardSwap';
import LightRays from './ui/LightRays';

export default function Portfolio() {
  // Dados de exemplo para o portfólio
  const portfolioItems = [
    {
      id: '1',
      title: 'E-commerce de Moda',
      description: 'Plataforma completa de e-commerce com foco em experiência do usuário e alta conversão.',
      image: '/portfolio/ecommerce.jpg', // Placeholder - será substituído por imagens reais
      tags: ['E-commerce', 'UI/UX', 'Next.js'],
    },
    {
      id: '2',
      title: 'Landing Page Corporativa',
      description: 'Landing page de alto impacto para empresa de tecnologia com foco em conversão.',
      image: '/portfolio/landing.jpg', // Placeholder - será substituído por imagens reais
      tags: ['Landing Page', 'Conversão', 'React'],
    },
    {
      id: '3',
      title: 'Dashboard Analítico',
      description: 'Interface de dashboard para visualização de dados e métricas de performance.',
      image: '/portfolio/dashboard.jpg', // Placeholder - será substituído por imagens reais
      tags: ['Dashboard', 'Data Viz', 'SaaS'],
    },
    {
      id: '4',
      title: 'Aplicativo de Gestão',
      description: 'Sistema completo para gestão de processos e equipes com interface intuitiva.',
      image: '/portfolio/app.jpg', // Placeholder - será substituído por imagens reais
      tags: ['Web App', 'Gestão', 'Full Stack'],
    },
  ];

  return (
    <div className="relative w-full">
      {/* Background com LightRays */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.4}
          lightSpread={0.4}
          rayLength={1}
          pulsating={false}
          fadeDistance={1.5}
          saturation={1.0}
          followMouse={true}
          mouseInfluence={0.0}
          noiseAmount={0.05}
          distortion={0.0}
          className="w-full h-full"
        />
      </div>
      
      {/* Conteúdo */}
      <section id="portfolio" className="py-24 relative z-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Nosso <span className="text-[#FEAC0E]">Portfólio</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Conheça alguns dos projetos que desenvolvemos, combinando design moderno e performance excepcional.
            </p>
          </div>
          
          <CardSwap items={portfolioItems} />
          
          <div className="mt-16 text-center">
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 border border-gray-700 rounded-full text-white hover:bg-gray-800 transition-colors duration-200"
            >
              Ver todos os projetos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}