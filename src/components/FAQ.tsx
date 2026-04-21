'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        className="w-full py-8 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className={`text-xl md:text-2xl font-medium tracking-wide transition-colors duration-300 ${isOpen ? 'text-[#2563eb]' : 'text-white group-hover:text-zinc-300'}`}>
          {question}
        </h3>
        <div className={`ml-6 shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-[#2563eb] bg-[#2563eb]/10 text-[#2563eb]' : 'border-white/10 text-white group-hover:border-white/30'}`}>
          {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-zinc-400 text-lg leading-relaxed font-light pr-12 md:pr-24">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: 'Como funciona a exclusividade (Atendimento Boutique)?',
      answer: 'Diferente de agências tradicionais, nós limitamos o número de projetos simultâneos. Isso garante que os desenvolvedores e designers seniores estejam focados 100% no seu ecossistema, entregando qualidade cirúrgica sem gargalos ou atrasos.',
    },
    {
      question: 'Quanto tempo leva para desenvolver um ecossistema?',
      answer: 'O tempo reflete o nível de detalhe do seu projeto. Uma Landing Page High-End leva de 2 a 3 semanas. Um E-commerce de luxo ou Sistema de Gestão pode levar de 6 a 12 semanas. O cronograma exato e milimétrico é entregue na nossa primeira reunião de escopo.',
    },
    {
      question: 'Vocês trabalham com templates prontos?',
      answer: 'Absolutamente não. Cada linha de código e cada decisão de design é criada do zero para a sua marca. Um template pronto carrega códigos inúteis e design engessado; nós construímos soluções que escalam e performam no mais alto nível.',
    },
    {
      question: 'Quais tecnologias sustentam as aplicações?',
      answer: 'Utilizamos as stacks mais robustas do mercado atual: Next.js 14, React, TailwindCSS, TypeScript e Framer Motion no front-end. No back-end e infraestrutura, confiamos em Node.js, Prisma, PostgreSQL e AWS para garantir segurança de nível bancário e zero quedas.',
    },
    {
      question: 'O que acontece após o lançamento (Deploy)?',
      answer: 'Nós não abandonamos o barco. Oferecemos pacotes de suporte e evolução contínua (Retainer) onde cuidamos da infraestrutura, atualizações de segurança, monitoramento de uptime 24/7 e desenvolvimento de novas features enquanto seu negócio escala.',
    },
  ];
  
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-[#0a0a0a] relative">
      {/* Background Decorator */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Minimalista */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Dúvidas <span className="text-[#2563eb] italic font-serif">Frequentes</span>
          </h2>
          <p className="text-xl text-zinc-400 font-light">
            Transparência total sobre como construímos o seu sucesso.
          </p>
        </motion.div>
        
        {/* Acordeão */}
        <div className="border-t border-white/10">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}