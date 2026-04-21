"use client";

import { Code2, LayoutPanelLeft, Cpu, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function Solutions() {
  const solutions = [
    {
      title: "Seu Sistema, Seu Patrimônio",
      description: "Esqueça mensalidades abusivas. Desenvolvemos um sistema que organiza seu estoque e processos, e que cresce com a sua empresa sem você precisar trocar de software.",
      icon: <Code2 className="w-8 h-8 text-[#2563eb]" />,
      colSpan: "col-span-1 md:col-span-2 lg:col-span-7",
      theme: "from-[#2563eb]/20 to-transparent",
      features: ["Fim das Planilhas", "Pague Uma Vez", "Acesso no Celular"]
    },
    {
      title: "Sites Que Vendem Sozinhos",
      description: "Páginas desenhadas para guiar o cliente até o seu WhatsApp. Carregam em 2 segundos e transformam visitantes curiosos em leads qualificados.",
      icon: <Target className="w-8 h-8 text-emerald-400" />,
      colSpan: "col-span-1 md:col-span-2 lg:col-span-5",
      theme: "from-emerald-500/20 to-transparent",
      features: ["Copy Estratégica", "Carregamento Rápido", "Foco em Conversão"]
    },
    {
      title: "Seus Dados Em Um Só Lugar",
      description: "Conectamos seu financeiro, vendas e WhatsApp. Pare de digitar a mesma coisa duas vezes e libere até 3 horas do dia da sua equipe.",
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      colSpan: "col-span-1 md:col-span-2 lg:col-span-5",
      theme: "from-purple-500/20 to-transparent",
      features: ["Zero Trabalho Braçal", "Informação Centralizada", "Menos Erros"]
    },
    {
      title: "Experiência Premium",
      description: "Sua empresa parece pequena na internet? Criamos visuais de alto padrão que transmitem autoridade imediata e cobram o preço que o seu serviço realmente vale.",
      icon: <LayoutPanelLeft className="w-8 h-8 text-orange-400" />,
      colSpan: "col-span-1 md:col-span-2 lg:col-span-7",
      theme: "from-orange-500/20 to-transparent",
      features: ["Autoridade Imediata", "Fácil de Usar", "Design Moderno"]
    }
  ];

  return (
    <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.03)_0%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Minimalist Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 md:mb-32"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
            <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest">Nossas Soluções</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] max-w-3xl">
            Tudo automatizado. <br />
            <span className="text-[#2563eb]">Simples como abrir um Excel.</span>
          </h2>
        </motion.div>

        {/* High-End Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className={`${solution.colSpan} group relative p-8 md:p-10 rounded-[2rem] border border-white/10 bg-[#121212] overflow-hidden hover:border-white/20 transition-all duration-500`}
            >
              {/* Subtle Gradient Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.theme} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {solution.icon}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
                  {solution.title}
                </h3>
                
                <p className="text-zinc-400 text-lg leading-relaxed font-light mb-8 flex-grow">
                  {solution.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {solution.features.map((feature, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-md bg-[#0a0a0a] border border-white/5 text-sm text-zinc-300 font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}