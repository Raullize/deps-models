import FloatingLines from './ui/FloatingLines';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-10">
        <FloatingLines 
          enabledWaves={['top', 'middle', 'bottom']} 
          lineCount={[4, 4, 4]} 
          lineDistance={[8, 6, 4]} 
          bendRadius={5.0} 
          bendStrength={-0.5} 
          interactive={true} 
          parallax={true}
          linesGradient={['#0A2A5D', '#0046AF', '#49BEFF']}
        />
        
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Transformamos Ideias em
          <span className="text-blue-400 block md:inline-block">Experiências Digitais</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Criamos soluções web de alta performance que unem design, eficiência e tecnologia para impulsionar o seu negócio.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#services" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center">
            Ver Serviços
          </a>
          <a href="#contact" className="w-full sm:w-auto bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center">
            Pedir Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}