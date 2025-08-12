import { CheckCircle, Clock, Zap, Award, Users, Shield } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function Feature({ title, description, icon }: FeatureProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-[#FEAC0E] mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default function About() {
  const features = [
    {
      title: 'Design de Alto Impacto',
      description: 'Criamos interfaces modernas e atraentes que capturam a essência da sua marca e impressionam seus visitantes.',
      icon: <Award size={24} />,
    },
    {
      title: 'Performance Otimizada',
      description: 'Nossos sites são desenvolvidos com foco em velocidade e desempenho, garantindo carregamento rápido e experiência fluida.',
      icon: <Zap size={24} />,
    },
    {
      title: 'Entrega no Prazo',
      description: 'Cumprimos rigorosamente os prazos estabelecidos, mantendo você informado em cada etapa do processo.',
      icon: <Clock size={24} />,
    },
    {
      title: 'Equipe Especializada',
      description: 'Contamos com profissionais experientes em design, desenvolvimento e marketing digital para resultados excepcionais.',
      icon: <Users size={24} />,
    },
    {
      title: 'Resultados Comprovados',
      description: 'Nossa metodologia é focada em gerar resultados mensuráveis para o seu negócio, com foco em conversão e engajamento.',
      icon: <CheckCircle size={24} />,
    },
    {
      title: 'Suporte Contínuo',
      description: 'Oferecemos suporte técnico e acompanhamento após a entrega do projeto para garantir seu sucesso contínuo.',
      icon: <Shield size={24} />,
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Por que escolher a <span className="text-[#FEAC0E]">DEPS Models</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Combinamos design moderno, tecnologia avançada e estratégia para criar soluções digitais que transformam negócios.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-[#FEAC0E] text-black font-medium rounded-full hover:bg-[#FFD25C] transition-colors duration-200"
          >
            Fale com nossa equipe
          </a>
        </div>
      </div>
    </section>
  );
}