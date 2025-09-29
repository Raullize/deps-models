export default function Problems() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Seus desafios digitais estão{' '}
            <span className="text-red-400">limitando</span> seu crescimento?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Sabemos como é frustrante quando a tecnologia se torna um obstáculo ao invés de uma solução para o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-red-400/50 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Sites lentos e desatualizados</h3>
                <p className="text-gray-400 mb-4">Perdendo clientes por tecnologia obsoleta</p>
                <p className="text-gray-400">Dificuldade para vender online</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-red-400/50 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Sem estratégia digital eficiente para conversão</h3>
                <p className="text-gray-400 mb-4">Soluções genéricas</p>
                <p className="text-gray-400">Software que não atende suas necessidades específicas</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-red-400/50 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Falta de escalabilidade</h3>
                <p className="text-gray-400 mb-4">Sistemas que não crescem com seu negócio</p>
                <p className="text-gray-400">Limitações técnicas constantes</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-red-400/50 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Custos elevados de desenvolvimento</h3>
                <p className="text-gray-400 mb-4">Orçamentos que explodem sem resultados</p>
                <p className="text-gray-400">Projetos que nunca terminam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}