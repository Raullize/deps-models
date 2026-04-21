"use client";

import { Target, Users, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      title: 'Foco Absoluto no Resultado',
      description: 'Não fazemos sites por fazer. Cada linha de código e pixel desenhado tem um objetivo métrico: aumentar sua conversão e elevar o ticket médio do seu negócio.',
      icon: <Target className="w-8 h-8 text-[#2563eb]" />
    },
    {
      title: 'Atendimento Boutique',
      description: 'Você não é apenas mais um número em uma esteira de produção. Trabalhamos com um volume seleto de projetos para garantir dedicação extrema a cada cliente.',
      icon: <Users className="w-8 h-8 text-[#2563eb]" />
    },
    {
      title: 'Excelência Técnica',
      description: 'Utilizamos as mesmas tecnologias que sustentam gigantes do Vale do Silício. Performance ultrarrápida, SEO técnico impecável e arquitetura que não trava.',
      icon: <Zap className="w-8 h-8 text-[#2563eb]" />
    },
    {
      title: 'Segurança e Confiança',
      description: 'Desenvolvemos ecossistemas digitais blindados. Da proteção de dados do seu cliente até a estabilidade do seu servidor nos dias de pico de tráfego.',
      icon: <ShieldCheck className="w-8 h-8 text-[#2563eb]" />
    }
  ];

  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Editorial Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#2563eb]" />
            <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest">Sobre a DEPS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            Não somos uma fábrica de sites. <br className="hidden md:block" />
            Somos uma <span className="text-[#2563eb] italic font-serif pr-2">boutique</span> de tecnologia.
          </h2>
          
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
            A DEPS Models nasceu da urgência de entregar soluções digitais que não sejam apenas "mais um template na internet". 
            Nós acreditamos que a sua presença digital deve ser a sua ferramenta de vendas mais agressiva e o seu maior ativo de marca.
          </p>
        </motion.div>

        {/* Minimalist Values Grid (Magazine Style) */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 lg:gap-y-20 border-t border-white/10 pt-16">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              className="group relative"
            >
              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
                {/* Icon Container */}
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#121212] border border-white/5 flex items-center justify-center group-hover:bg-[#2563eb]/10 group-hover:border-[#2563eb]/30 transition-colors duration-500">
                  {value.icon}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-[#2563eb] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-zinc-400 text-lg leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}