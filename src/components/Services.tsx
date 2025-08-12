import { Monitor, ShoppingBag, Smartphone, Code, Palette, BarChart } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <SpotlightCard 
      className="transition-all duration-300 group"
      spotlightColor="rgba(254, 172, 14, 0.15)"
    >
      <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center mb-4 text-gray-400 group-hover:text-[#FEAC0E] transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#FEAC0E] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400">
        {description}
      </p>
    </SpotlightCard>
  );
}

export default function Services() {
  const services = [
    {
      title: 'Landing Pages',
      description: 'Páginas de alta conversão focadas em transformar visitantes em leads e clientes.',
      icon: <Monitor size={24} />,
    },
    {
      title: 'E-commerce',
      description: 'Lojas virtuais completas com experiência de compra otimizada e gestão simplificada.',
      icon: <ShoppingBag size={24} />,
    },
    {
      title: 'Aplicativos Web',
      description: 'Sistemas e aplicações web personalizadas para necessidades específicas do seu negócio.',
      icon: <Code size={24} />,
    },
    {
      title: 'Design UI/UX',
      description: 'Interfaces intuitivas e atraentes que proporcionam a melhor experiência para seus usuários.',
      icon: <Palette size={24} />,
    },
    {
      title: 'Sites Responsivos',
      description: 'Websites adaptados para todos os dispositivos, garantindo a melhor visualização em qualquer tela.',
      icon: <Smartphone size={24} />,
    },
    {
      title: 'Análise de Dados',
      description: 'Implementação de ferramentas de análise para acompanhar e otimizar a performance do seu site.',
      icon: <BarChart size={24} />,
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Nossos <span className="text-[#FEAC0E]">Serviços</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Oferecemos soluções digitais completas para transformar sua presença online e impulsionar seus resultados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}