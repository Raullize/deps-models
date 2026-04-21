"use client";

import { Target, Users, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      title: 'Suporte Direto com Dono',
      description: 'Sem chamados demorados ou estagiários no suporte. Você tem o WhatsApp de quem construiu o seu sistema para resolver qualquer coisa.',
      icon: <Users className="w-8 h-8 text-[#2563eb]" />
    },
    {
      title: 'Seu Sistema, Suas Regras',
      description: 'Chega de engessar sua operação num software de prateleira. Desenvolvemos algo que respeita o jeito como você gosta de trabalhar.',
      icon: <Target className="w-8 h-8 text-[#2563eb]" />
    },
    {
      title: 'Nunca Mais Perca Vendas',
      description: 'Sistemas que carregam rápido e nunca saem do ar, para que a sua equipe foque no que importa: vender mais e atender bem.',
      icon: <Zap className="w-8 h-8 text-[#2563eb]" />
    },
    {
      title: 'Menos Custo, Mais Lucro',
      description: 'Reduza a folha de pagamento eliminando trabalho braçal. A tecnologia que implementamos se paga sozinha nos primeiros meses.',
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
            <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest">QUEM SOMOS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            Nós entendemos a dor <br className="hidden md:block" />
            do <span className="text-[#2563eb] italic font-serif pr-2">Empresário.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-6">
            A DEPS nasceu porque percebemos que empresas estão <strong className="text-white font-medium">perdendo muito dinheiro usando planilhas lentas ou sistemas de prateleira que não funcionam direito.</strong>
          </p>
          <p className="text-zinc-500 text-lg leading-relaxed">
            Nós ajudamos empresas como a sua a organizar o estoque, automatizar vendas e parar de perder tempo com retrabalho. Você fala direto com a gente. Sem intermediários, sem termos técnicos complicados.
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