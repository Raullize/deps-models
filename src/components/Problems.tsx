"use client";

import { motion } from "framer-motion";

export default function Problems() {
  const problems = [
    {
      title: "Planilhas que Travam",
      description: "Você perde horas cruzando dados enquanto poderia estar focando no crescimento do negócio. Suas planilhas travam quando você mais precisa.",
    },
    {
      title: "Trabalho Dobrado",
      description: "Sua equipe perde vendas ou irrita clientes porque precisa digitar a mesma informação em três lugares diferentes.",
    },
    {
      title: "Sistemas Engessados",
      description: "Softwares de prateleira caros que não entendem o seu processo e fazem sua equipe trabalhar para o sistema, e não o contrário.",
    },
    {
      title: "Clientes Escapando",
      description: "Você investe para trazer o cliente, mas o site lento ou confuso faz ele fechar a aba e ir para o concorrente no WhatsApp.",
    }
  ];

  return (
    <section className="relative py-32 md:py-48 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[30rem] h-[30rem] bg-red-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[30rem] h-[30rem] bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Huge Typography */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
              A falta de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                tecnologia
              </span> <br />
              está custando caro?
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-xl">
              Sabemos como é frustrante perder um cliente grande porque não conseguiu emitir um orçamento rápido ou não encontrou a informação no estoque.
            </p>
          </motion.div>

          {/* Right Column: Minimalist Problem List */}
          <div className="flex flex-col gap-8">
            {problems.map((problem, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                className="group relative pl-8 md:pl-12 border-l border-white/10 hover:border-red-500/50 transition-colors duration-500"
              >
                {/* Animated Dot */}
                <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-white/20 group-hover:bg-red-500 group-hover:shadow-[0_0_10px_rgba(239,68,68,0.8)] transition-all duration-500" />
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-wide">
                  {problem.title}
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed font-light">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}