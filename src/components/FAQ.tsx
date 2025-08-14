'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-gray-800 last:border-b-0">
      <button
        className="w-full py-5 px-4 flex items-center justify-between text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <span className="text-[#FEAC0E] ml-4">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 pt-0 pb-5 text-gray-400">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: 'Quanto tempo leva para desenvolver um site?',
      answer: 'O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Uma landing page simples pode levar de 1 a 2 semanas, enquanto um e-commerce completo ou sistema web pode levar de 4 a 12 semanas. Durante nossa reunião inicial, forneceremos um cronograma detalhado específico para o seu projeto.',
    },
    {
      question: 'Quais tecnologias vocês utilizam?',
      answer: 'Utilizamos tecnologias modernas e de alta performance como React, Next.js, TailwindCSS para o frontend, e Node.js, Python ou PHP para backend, dependendo das necessidades específicas do projeto. Nossa stack é escolhida para garantir sites rápidos, seguros e escaláveis.',
    },
    {
      question: 'Vocês oferecem serviços de manutenção após o lançamento?',
      answer: 'Sim, oferecemos planos de manutenção mensal que incluem atualizações de segurança, correções de bugs, pequenas alterações de conteúdo e monitoramento de performance. Também disponibilizamos pacotes de horas para desenvolvimento de novas funcionalidades após o lançamento.',
    },
    {
      question: 'Como funciona o processo de desenvolvimento?',
      answer: 'Nosso processo inclui: 1) Briefing e levantamento de requisitos; 2) Proposta e planejamento; 3) Design de interface e protótipos; 4) Desenvolvimento; 5) Testes e ajustes; 6) Lançamento; 7) Suporte pós-lançamento. Mantemos comunicação constante durante todo o processo para garantir que o resultado final atenda às suas expectativas.',
    },
    {
      question: 'Vocês desenvolvem sites responsivos?',
      answer: 'Sim, todos os nossos projetos são desenvolvidos com design responsivo, garantindo que funcionem perfeitamente em todos os dispositivos, desde smartphones até desktops. A experiência do usuário é otimizada para cada tamanho de tela.',
    },
    {
      question: 'Quais formas de pagamento vocês aceitam?',
      answer: 'Aceitamos pagamentos via transferência bancária, PIX, boleto e cartão de crédito (parcelado em até 12x). Nossos projetos geralmente seguem o modelo de 40% de entrada, 30% na aprovação do design e 30% na entrega final, mas podemos discutir planos personalizados conforme a necessidade.',
    },
  ];
  
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Perguntas <span className="text-[#FEAC0E]">Frequentes</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e processo de trabalho.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden divide-y divide-gray-800">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Não encontrou o que procurava?</p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 border border-[#FEAC0E] text-[#FEAC0E] rounded-full hover:bg-[#FEAC0E]/10 transition-colors duration-200"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
}