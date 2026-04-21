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
      question: 'Vou ser atendido por um robô ou estagiário no suporte?',
      answer: 'Não. Aqui você tem o WhatsApp direto de quem construiu o seu sistema. Sem tickets de suporte demorados ou musiquinha de espera. Você fala diretamente com os fundadores para resolver qualquer dúvida.',
    },
    {
      question: 'Um sistema sob medida não é muito caro?',
      answer: 'Caro é perder vendas porque a planilha travou ou pagar mensalidades eternas para softwares de prateleira que não resolvem o seu problema. Nosso modelo é um investimento no seu patrimônio: o sistema é seu e se paga rapidamente com a economia de tempo e redução de erros da sua equipe.',
    },
    {
      question: 'Minha equipe vai ter dificuldade para aprender a usar?',
      answer: 'Se eles sabem usar o WhatsApp ou o Excel, vão saber usar nosso sistema. Focamos em criar telas extremamente simples e intuitivas. Além disso, nós entregamos o treinamento completo para garantir que todos usem a ferramenta sem resistência.',
    },
    {
      question: 'O sistema é seguro? Meus dados podem vazar?',
      answer: 'A segurança é nossa prioridade. Construímos sua plataforma com as mesmas práticas e infraestrutura de segurança usadas pelas maiores empresas de tecnologia do mundo. Seus dados e os dados dos seus clientes ficam blindados e o sistema não sai do ar.',
    },
    {
      question: 'E se a minha empresa crescer e eu precisar de coisas novas?',
      answer: 'Essa é a maior vantagem de ter o seu próprio sistema. Ele cresce junto com você. Como não usamos soluções engessadas, podemos criar novas funções, painéis e integrações sempre que o seu negócio der um novo passo.',
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