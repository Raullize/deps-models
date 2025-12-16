export default function About() {
  const stats = [
    { number: '+50', label: 'Projetos Entregues' },
    { number: '+30', label: 'Clientes Satisfeitos' },
    { number: '95%', label: 'Taxa de Satisfação' },
    { number: '24h', label: 'Suporte Rápido' }
  ];

  const values = [
    {
      title: 'Foco no Resultado',
      description: 'Cada projeto é desenvolvido com o objetivo claro de gerar impacto real no seu negócio.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Parceria Verdadeira',
      description: 'Trabalhamos lado a lado com você, entendendo profundamente suas necessidades.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Excelência Técnica',
      description: 'Utilizamos as melhores tecnologias e práticas para garantir qualidade superior.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Compromisso Total',
      description: 'Seu sucesso é o nosso sucesso. Estamos comprometidos com sua transformação digital.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nosso compromisso é com sua{' '}
            <span className="text-blue-400">transformação digital</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A DEPS Models nasceu da necessidade de entregar soluções digitais verdadeiramente sob medida. 
            Sabemos que cada negócio é único, e é exatamente isso que nos motiva.
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mt-4">
            Nossa missão é ser o parceiro tecnológico que sua empresa precisa para crescer, 
            inovar e se destacar no mercado digital.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}