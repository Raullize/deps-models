import FloatingLines from './ui/FloatingLines';
import TextType from './ui/TextType';

export default function Hero() {
  return (
    <section id="home" className="min-h-svh relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 w-full h-full z-10">
        <FloatingLines 
          enabledWaves={['top', 'middle', 'bottom']} 
          lineCount={[3, 3, 3]} 
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
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Pare de perder vendas por <br />
          <div className="text-blue-500 block mt-2 min-h-[1.5em]">
            <TextType
              text={[
                'planilhas travadas', 
                'sistemas engessados', 
                'falta de processos', 
                'sites que não convertem'
              ]}
              typingSpeed={80}
              deletingSpeed={40}
              pauseDuration={2500}
              loop={true}
              cursorCharacter="_"
              showCursor={true}
            />
          </div>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Nós desenvolvemos o sistema sob medida que organiza sua empresa e libera horas do seu dia. Automatizamos seus processos sem complicar.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#services" 
            className="group relative w-full sm:w-auto overflow-hidden bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center justify-center"
          >
            <span className="relative z-10">Quero organizar minha empresa</span>
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-white/5 border border-white/10 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 flex items-center justify-center"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}