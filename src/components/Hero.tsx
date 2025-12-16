import FloatingLines from './ui/FloatingLines';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-10">
        <FloatingLines 
          enabledWaves={['top', 'middle', 'bottom']} 
          lineCount={[10, 15, 20]} 
          lineDistance={[8, 6, 4]} 
          bendRadius={5.0} 
          bendStrength={-0.5} 
          interactive={true} 
          parallax={true} 
        />
        
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-20 pointer-events-none">
        
      </div>
    </section>
  );
}