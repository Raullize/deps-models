"use client";

import { useState } from 'react';
import { ArrowRight, Mail, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/site';
import { trackEvent } from '@/lib/analytics';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      if (!formData.name || !formData.whatsapp) {
        setStatus('error');
        trackEvent('form_error', { form: 'contact', error: 'Nome e WhatsApp são obrigatórios' });
        return;
      }

      // Simulando um delay mínimo para feedback visual do botão
      await new Promise((resolve) => setTimeout(resolve, 800));

      setStatus('success');
      trackEvent('form_submit', { form: 'contact' });
      
      // Redireciona para o WhatsApp
      const text = encodeURIComponent(`Olá! Meu nome é ${formData.name}. Gostaria de falar sobre um projeto.`);
      window.open(`https://wa.me/${siteConfig.contact.whatsapp.number}?text=${text}`, '_blank');

    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
      {/* Massive Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          
          {/* Left Column: Contact Info & Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 w-max">
              <div className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
              <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest">Inicie seu Projeto</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              Pronto para <br />
              <span className="text-[#2563eb] italic font-serif">organizar a casa?</span>
            </h2>
            
            <p className="text-xl text-zinc-400 font-light leading-relaxed mb-16 max-w-lg">
              Pare de perder dinheiro com processos manuais. Fale com a gente agora pelo WhatsApp ou preencha o formulário abaixo.
            </p>

            {/* Direct Contacts */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#2563eb] group-hover:bg-[#2563eb]/10 transition-all duration-500">
                  <Mail className="w-5 h-5 text-zinc-400 group-hover:text-[#2563eb] transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-mono mb-1 uppercase tracking-wider">E-mail Direto</p>
                  <p className="text-xl text-white font-light">depsmodels@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#2563eb] group-hover:bg-[#2563eb]/10 transition-all duration-500">
                  <MapPin className="w-5 h-5 text-zinc-400 group-hover:text-[#2563eb] transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-mono mb-1 uppercase tracking-wider">Localização</p>
                  <p className="text-xl text-white font-light">Rio Grande do Sul, BR</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Form */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-[#121212]/80 backdrop-blur-xl p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden"
          >
            {status === 'success' ? (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#121212] p-8 text-center animate-in fade-in duration-500">
                <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Tudo Certo!</h3>
                <p className="text-zinc-400 text-lg">
                  Sua solicitação foi enviada. Redirecionando para o nosso WhatsApp...
                </p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              
              {/* Input Group */}
              <div className="relative group">
                <input 
                  type="text" 
                  name="name"
                  id="name"
                  required
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#2563eb] transition-colors peer"
                />
              </div>

              {/* Input Group */}
              <div className="relative group">
                <input 
                  type="tel" 
                  name="whatsapp"
                  id="whatsapp"
                  required
                  placeholder="Seu WhatsApp (com DDD)"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#2563eb] transition-colors peer"
                />
              </div>

              {/* Input Group */}
              <div className="relative group">
                <input 
                  type="email" 
                  name="email"
                  id="email"
                  placeholder="E-mail profissional (opcional)"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#2563eb] transition-colors peer"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="group relative w-full py-5 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100"
              >
                {/* Button Hover Effect */}
                <div className="absolute inset-0 bg-[#2563eb] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                
                <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors duration-500">
                  {status === 'loading' ? (
                    <>
                      Enviando...
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Falar com Especialista
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>

              {status === 'error' && (
                <p className="text-center text-red-500 text-sm mt-[-10px]">
                  Ocorreu um erro ao enviar. Tente diretamente pelo WhatsApp.
                </p>
              )}

              <p className="text-center text-sm text-zinc-500 font-light mt-[-10px]">
                Seu projeto começará no momento em que você clicar.
              </p>

            </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}