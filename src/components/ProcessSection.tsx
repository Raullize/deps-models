"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Mapeamento Rápido",
    description: "Em apenas 1 hora de conversa, mapeamos seus processos e entendemos exatamente onde seu negócio está perdendo dinheiro.",
    tags: ["Análise de Dores", "Diagnóstico Gratuito", "Proposta de Valor"],
  },
  {
    number: "02",
    title: "Desenvolvimento Transparente",
    description: "Criamos seu sistema do zero. Você acompanha tudo de perto e já vê as telas ganhando vida antes mesmo de finalizado.",
    tags: ["Sem Surpresas", "Foco em Resultados", "Aprovação por Etapas"],
  },
  {
    number: "03",
    title: "Testes Práticos",
    description: "Garantimos que o sistema seja simples de usar. Se a sua equipe sabe usar o WhatsApp, vai saber usar nossa plataforma.",
    tags: ["Zero Complexidade", "Sem Telas Confusas", "Ajustes Rápidos"],
  },
  {
    number: "04",
    title: "Treinamento da Equipe",
    description: "Não te deixamos na mão. Em 1 dia útil, treinamos seus funcionários para que todos extraiam o máximo do novo sistema.",
    tags: ["Onboarding Fácil", "Adoção Imediata", "Sem Resistência"],
  },
  {
    number: "05",
    title: "Suporte Direto (WhatsApp)",
    description: "Esqueça tickets demorados ou robôs. Você fala diretamente no WhatsApp com quem desenvolveu o seu projeto.",
    tags: ["Atendimento Humano", "Respostas Rápidas", "Parceria Longa"],
  },
];

export default function ProcessSection() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Calculate exact translation to perfectly center the last item at the end of scroll
  const itemWidth = 1100; // Exact width of each TimelineStep (increased to 1100px for the 2-column layout)
  const totalTranslation = (steps.length - 1) * itemWidth;
  
  // Translates left by exactly the total distance between first and last dot
  const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${totalTranslation}px`]);

  return (
    // Increased height to 400vh to make the animation significantly slower
    <section ref={targetRef} className="relative h-auto md:h-[400vh] bg-[#0a0a0a]">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08)_0%,rgba(10,10,10,1)_70%)] pointer-events-none" />

      {/* Header - Sticky Fixed at the very top of the section so it NEVER scrolls away while in this section */}
      <div className="sticky top-0 w-full z-50 pt-0 md:pt-4 px-4 md:px-12 pointer-events-none h-0">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight pointer-events-auto bg-[#0a0a0a]/80 backdrop-blur-md md:bg-transparent md:backdrop-blur-none inline-block p-2 md:p-0 rounded-lg">
          NOSSO <span className="text-[#2563eb] drop-shadow-[0_0_15px_rgba(37,99,235,0.8)]">PROCESSO</span>
        </h2>
      </div>

      {/* Pinned container */}
      <div className="relative md:sticky md:top-0 md:h-screen flex flex-col justify-center overflow-hidden py-12 md:py-0">
        
        {/* Tiny Progress Bar - Fills up with scroll */}
        <motion.div 
          className="hidden md:block absolute top-0 left-0 h-[2px] z-50 origin-left w-full"
          style={{ 
            scaleX: scrollYProgress,
            background: "linear-gradient(90deg, transparent, #2563eb, #60a5fa)",
            boxShadow: "0 0 10px #2563eb"
          }}
        />

        {/* Mobile: Vertical List (Fallback) */}
        <div className="md:hidden flex flex-col gap-16 px-4 w-full max-w-7xl mx-auto relative z-10 mt-12">
          {steps.map((step, index) => (
            <MobileProcessCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* Desktop: Horizontal Timeline Scroll */}
        <div className="hidden md:flex w-full items-center relative h-full">
          
          {/* The moving timeline content */}
          {/* We use px-[calc(50vw-550px)] to perfectly center the first 1100px item */}
          <motion.div 
            style={{ x }} 
            className="flex items-center w-max px-[calc(50vw-550px)] relative z-10 h-full"
          >
            {/* Fixed center horizontal line background that connects all dots */}
            <div 
              className="absolute top-1/2 left-[50vw] h-[2px] bg-white/10 -translate-y-1/2" 
              style={{ width: `${totalTranslation}px` }} 
            />
            
            {/* Animated active line on the screen that fills exactly between dots based on scroll */}
            <motion.div 
              className="absolute top-1/2 left-[50vw] h-[2px] bg-[#2563eb] -translate-y-1/2 origin-left z-0"
              style={{ 
                width: `${totalTranslation}px`,
                scaleX: scrollYProgress,
                boxShadow: "0 0 15px #2563eb"
              }}
            />

            {steps.map((step, index) => (
              <TimelineStep 
                key={index} 
                step={step} 
                index={index} 
                progress={scrollYProgress} 
                total={steps.length} 
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TimelineStep({ step, index, progress, total }: { step: typeof steps[0], index: number, progress: MotionValue<number>, total: number }) {
  // Calculate exact position (0.0 to 1.0) where this step should be perfectly centered
  const stepProgress = index / (total - 1);
  
  // Calculate continuous distance from the center (0 = perfectly centered)
  const distance = useTransform(progress, (p) => Math.abs(p - stepProgress));
  
  // Smoothly interpolate values based on distance, NO CSS transitions needed
  // We increased the threshold (e.g. 0.20 instead of 0.15) so the item stays fully visible/focused for a longer period of scroll
  const dotGlow = useTransform(distance, [0, 0.1, 0.2], [
    "0px 0px 30px 6px rgba(37,99,235,0.9)", 
    "0px 0px 20px 4px rgba(37,99,235,0.6)", 
    "0px 0px 0px 0px rgba(37,99,235,0)"
  ]);
  const dotBg = useTransform(distance, [0, 0.1, 0.2], [
    "#2563eb", 
    "#2563eb", 
    "#0a0a0a"
  ]);
  const dotScale = useTransform(distance, [0, 0.15], [1.8, 1]);
  
  // Otimização de Performance: Removendo o filtro de blur pesadíssimo no scroll
  // Em vez de borrar a tela, apenas controlamos a opacidade e escala para dar profundidade
  const textOpacity = useTransform(distance, [0, 0.15, 0.3], [1, 1, 0.15]); 
  const textY = useTransform(distance, [0, 0.25], [0, 30]);
  
  // Parallax effect: The background number moves slightly opposite to the scroll
  const parallaxX = useTransform(progress, (p) => {
    return (p - stepProgress) * 200;
  });
  
  // Scale down items that are far away
  const itemScale = useTransform(distance, [0, 0.15, 0.3], [1, 1, 0.85]);

  return (
    <motion.div 
      className="relative flex flex-row items-center justify-between w-[1100px] h-[600px] shrink-0 px-12"
      style={{ scale: itemScale, willChange: "transform" }}
    >
      
      {/* Background Giant Number with Parallax */}
      <motion.div 
        className="absolute top-1/2 left-[5%] -translate-y-[55%] text-[20rem] lg:text-[28rem] font-black pointer-events-none select-none z-0"
        style={{
          color: "rgba(37,99,235,0.06)",
          WebkitTextStroke: "3px rgba(37,99,235,0.4)",
          textShadow: "0 0 100px rgba(37,99,235,0.25)",
          opacity: textOpacity,
          x: parallaxX,
          willChange: "transform, opacity",
        }}
      >
        {step.number}
      </motion.div>

      {/* Left Column: Text & Content */}
      <motion.div 
        className="relative z-10 w-1/2 pr-8 flex flex-col justify-center"
        style={{
          opacity: textOpacity,
          y: textY,
          willChange: "transform, opacity",
        }}
      >
        <div className="flex items-center gap-4 mb-6">
          <motion.div 
            className="w-4 h-4 rounded-full border-2 border-[#2563eb]"
            style={{
              backgroundColor: dotBg,
              boxShadow: dotGlow,
              scale: dotScale,
            }}
          />
          <span className="text-[#2563eb] font-mono text-xl font-bold tracking-widest">
            STEP {step.number}
          </span>
        </div>
        
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide leading-tight">
          {step.title}
        </h3>
        <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-8">
          {step.description}
        </p>

        {/* High-End Detail Tags */}
        <div className="flex flex-col gap-3">
          {step.tags?.map((tag, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb] opacity-70" />
              <span className="text-sm md:text-base text-zinc-300 tracking-wide">{tag}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Column: Abstract Code-based Visual Illustration */}
      <motion.div 
        className="relative z-10 w-[450px] h-[450px] flex items-center justify-center"
        style={{
          opacity: textOpacity,
          scale: useTransform(distance, [0, 0.15], [1, 0.8]),
          willChange: "transform, opacity",
        }}
      >
        {/* Glow behind illustration - Simplificado e mais leve */}
        <motion.div 
          className="absolute inset-0 bg-[#2563eb] rounded-full blur-[60px] -z-10"
          style={{ opacity: useTransform(distance, [0, 0.1], [0.1, 0]), willChange: "opacity" }}
        />
        <AbstractVisual stepNumber={step.number} />
      </motion.div>

    </motion.div>
  );
}

// High-End Code-based Abstract Illustrations for each step
function AbstractVisual({ stepNumber }: { stepNumber: string }) {
  switch (stepNumber) {
    case "01": // Alinhamento de Visão (Nodes / Connections)
      return (
        <div className="relative w-full h-full border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent rounded-3xl backdrop-blur-sm overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,transparent_70%)]" />
          <div className="relative w-64 h-64">
            {/* Connecting Lines */}
            <div className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-[#2563eb]/50 origin-left -rotate-45" />
            <div className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-[#2563eb]/50 origin-left rotate-12" />
            <div className="absolute top-1/2 left-1/2 w-24 h-[1px] bg-[#2563eb]/50 origin-left rotate-[120deg]" />
            {/* Glowing Nodes */}
            <div className="absolute top-1/2 left-1/2 w-6 h-6 -ml-3 -mt-3 rounded-full bg-[#2563eb] shadow-[0_0_20px_#2563eb] z-10" />
            <div className="absolute top-[10%] left-[80%] w-4 h-4 rounded-full border border-[#2563eb]/80 bg-[#0a0a0a]" />
            <div className="absolute top-[65%] left-[90%] w-3 h-3 rounded-full border border-[#2563eb]/80 bg-[#0a0a0a]" />
            <div className="absolute top-[80%] left-[20%] w-5 h-5 rounded-full border border-[#2563eb]/80 bg-[#0a0a0a]" />
          </div>
        </div>
      );
    case "02": // Experiência do Usuário (Wireframe/UI Skeleton)
      return (
        <div className="relative w-full h-full border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl backdrop-blur-sm p-8 flex flex-col gap-6">
          <div className="w-full h-32 rounded-xl border border-white/10 bg-white/[0.01] flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
            <div className="w-12 h-12 rounded-full bg-white/5" />
          </div>
          <div className="w-3/4 h-4 rounded-full bg-white/10" />
          <div className="w-full h-4 rounded-full bg-white/5" />
          <div className="w-5/6 h-4 rounded-full bg-white/5" />
          <div className="mt-auto flex justify-between gap-4">
            <div className="w-1/2 h-10 rounded-lg bg-[#2563eb]/20 border border-[#2563eb]/50" />
            <div className="w-1/2 h-10 rounded-lg bg-white/5 border border-white/10" />
          </div>
        </div>
      );
    case "03": // Construção Inteligente (Code Blocks)
      return (
        <div className="relative w-full h-full border border-white/5 bg-[#0a0a0a]/80 rounded-3xl p-6 font-mono text-sm overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]">
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="flex flex-col gap-3 text-[#2563eb]/70">
            <p><span className="text-purple-400">const</span> buildSystem = <span className="text-blue-400">async</span> () ={">"} {"{"}</p>
            <p className="pl-4"><span className="text-purple-400">await</span> optimizePerformance();</p>
            <p className="pl-4"><span className="text-purple-400">await</span> deployArchitecture();</p>
            <p className="pl-4">return <span className="text-green-400">"100% Scalable"</span>;</p>
            <p>{"}"}</p>
            <div className="mt-4 w-1/2 h-[1px] bg-gradient-to-r from-[#2563eb] to-transparent" />
            <p className="animate-pulse mt-2 text-white/50">{">"} compiling assets...</p>
          </div>
        </div>
      );
    case "04": // Refinamento de Excelência (Scanner/Radar)
      return (
        <div className="relative w-full h-full border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent rounded-3xl backdrop-blur-sm flex items-center justify-center overflow-hidden">
          <div className="absolute w-full h-[2px] bg-[#2563eb] shadow-[0_0_15px_#2563eb] top-1/2 animate-[scan_3s_ease-in-out_infinite]" />
          <div className="grid grid-cols-3 gap-4 p-8 w-full h-full">
            {[...Array(9)].map((_, i) => (
              <div key={i} className={`rounded-lg border ${i === 4 ? 'border-[#2563eb] bg-[#2563eb]/10' : 'border-white/5 bg-white/[0.01]'} flex items-center justify-center transition-colors duration-500`}>
                {i === 4 && <div className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping" />}
              </div>
            ))}
          </div>
        </div>
      );
    case "05": // Decolagem e Sucesso (Upward Trend / Particles)
      return (
        <div className="relative w-full h-full border border-white/5 bg-gradient-to-tr from-[#2563eb]/10 to-transparent rounded-3xl backdrop-blur-sm p-8 flex items-end">
          {/* Chart Bars */}
          <div className="w-full flex items-end justify-between h-48 gap-4">
            <div className="w-full bg-white/5 rounded-t-sm h-[20%]" />
            <div className="w-full bg-white/10 rounded-t-sm h-[40%]" />
            <div className="w-full bg-white/15 rounded-t-sm h-[60%]" />
            <div className="w-full bg-[#2563eb]/40 rounded-t-sm h-[80%] relative">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#2563eb] shadow-[0_0_20px_#2563eb]" />
            </div>
            <div className="w-full bg-[#2563eb] rounded-t-sm h-[100%] shadow-[0_0_30px_rgba(37,99,235,0.5)] relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-[16px] border-l-transparent border-r-transparent border-b-white animate-bounce" />
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

function MobileProcessCard({ step, index }: { step: typeof steps[0], index: number }) {
  return (
    <div className="relative flex flex-col pl-12">
      {/* Vertical Line */}
      <div className="absolute left-[11px] top-8 bottom-[-4rem] w-[2px] bg-white/10" />
      
      {/* Dot */}
      <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-[#0a0a0a] border-2 border-[#2563eb] shadow-[0_0_10px_#2563eb]" />
      
      {/* Giant Number */}
      <div className="absolute -top-8 -left-4 text-[8rem] font-black pointer-events-none"
           style={{ 
             color: "rgba(255,255,255,0.01)",
             WebkitTextStroke: "1px rgba(37,99,235,0.15)" 
           }}>
        {step.number}
      </div>

      <div className="relative z-10 mt-2">
        <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">{step.title}</h3>
        <p className="text-zinc-400 text-base leading-relaxed font-light">{step.description}</p>
      </div>
    </div>
  );
}
