'use client';
import { useState, useEffect, useRef } from 'react';

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: '1',
      title: 'Armazém Girassol',
      description: 'Sistema completo de gestão para armazém com controle de estoque, vendas e relatórios em tempo real.',
      video: '/videos/ArmazemGirassol.webm',
      link: 'https://armazemgirassol.com', 
      results: [
        { metric: '+300%', label: 'em conversões' },
        { metric: 'R$ 2M+', label: 'em vendas geradas' }
      ],
      category: 'Sistema de Gestão',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe']
    },
    {
      id: '2',
      title: 'MyGym',
      description: 'Aplicativo completo para gestão de academia com controle de membros, treinos e pagamentos.',
      video: '/videos/MyGym.webm',
      link: 'https://mygym.com',
      results: [
        { metric: '70%', label: 'redução de tempo' },
        { metric: '95%', label: 'satisfação dos usuários' }
      ],
      category: 'Aplicativo Mobile',
      technologies: ['Next.js', 'Python', 'MongoDB', 'AWS']
    },
    {
      id: '3',
      title: 'StockDeps',
      description: 'Sistema avançado de controle de estoque com análise preditiva e gestão automatizada de fornecedores.',
      video: '/videos/StockDeps.webm',
       link: '', 
      results: [
        { metric: '450%', label: 'aumento em leads' },
        { metric: '12%', label: 'taxa de conversão' }
      ],
      category: 'E-commerce',
      technologies: ['Next.js', 'Tailwind', 'Analytics', 'SEO']
    }
  ];

  const extendedProjects = [
    projects[projects.length - 1],
    ...projects,
    projects[0]
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => prev - 1);
  };

  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      if (currentSlide >= projects.length + 1) {
        setCurrentSlide(1);
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none';
          carouselRef.current.style.transform = `translateX(-${1 * 100}%)`;
          carouselRef.current.offsetHeight;
          carouselRef.current.style.transition = 'transform 500ms ease-in-out';
        }
      } else if (currentSlide <= 0) {
        setCurrentSlide(projects.length);
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none';
          carouselRef.current.style.transform = `translateX(-${projects.length * 100}%)`;
          carouselRef.current.offsetHeight;
          carouselRef.current.style.transition = 'transform 500ms ease-in-out';
        }
      }
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentSlide, isTransitioning, projects.length]);

  useEffect(() => {
    setCurrentSlide(1);
  }, []);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projetos que <span className="text-blue-400">transformaram</span> negócios
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e os resultados concretos que entregamos para nossos clientes.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {extendedProjects.map((project, index) => (
                <div key={`${project.id}-${index}`} className="w-full flex-shrink-0">
                  <div className="overflow-hidden">
                    <div className="grid lg:grid-cols-2">
                      <div className="relative h-80 lg:h-96 group">
                        <video 
                          src={project.video} 
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover block rounded-2xl"
                        />
                        
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                          {project.link ? (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm border-2 border-white/30"
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          ) : (
                            <div className="w-12 h-12 bg-gray-500/30 rounded-full flex items-center justify-center text-gray-400 backdrop-blur-sm border-2 border-gray-500/50 cursor-not-allowed">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="px-8 lg:px-12 flex flex-col">
                        <div className="inline-flex items-center mb-3">
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                            {project.category}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                          {project.description}
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                          {project.results.map((result, idx) => (
                            <div key={idx} className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50 text-center backdrop-blur-sm">
                              <div className="text-3xl font-bold text-blue-400 mb-2">
                                {result.metric}
                              </div>
                              <div className="text-gray-400 text-sm">
                                {result.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mb-4">
                          <h4 className="text-gray-300 font-medium mb-3">Tecnologias:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isTransitioning) return;
                    setIsTransitioning(true);
                    setCurrentSlide(index + 1);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                    (currentSlide === index + 1) || 
                    (currentSlide === 0 && index === projects.length - 1) || 
                    (currentSlide === projects.length + 1 && index === 0)
                      ? 'bg-blue-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}