"use client";

import { useState } from 'react';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
              <span className="text-[#2563eb] italic font-serif">escalar?</span>
            </h2>
            
            <p className="text-xl text-zinc-400 font-light leading-relaxed mb-16 max-w-lg">
              Nossa agenda para novos projetos é limitada. Preencha o formulário para agendarmos uma reunião de alinhamento estratégico.
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
            className="bg-[#121212]/80 backdrop-blur-xl p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              
              {/* Input Group */}
              <div className="relative group">
                <input 
                  type="text" 
                  name="name"
                  id="name"
                  required
                  placeholder="Seu nome ou da empresa"
                  value={formData.name}
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
                  required
                  placeholder="E-mail profissional"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#2563eb] transition-colors peer"
                />
              </div>

              {/* Input Group */}
              <div className="relative group">
                <select
                  name="budget"
                  id="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-zinc-400 focus:outline-none focus:border-[#2563eb] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-[#121212]">Orçamento estimado</option>
                  <option value="10k-20k" className="bg-[#121212]">R$ 10.000 - R$ 20.000</option>
                  <option value="20k-50k" className="bg-[#121212]">R$ 20.000 - R$ 50.000</option>
                  <option value="50k+" className="bg-[#121212]">Mais de R$ 50.000</option>
                </select>
              </div>

              {/* Input Group */}
              <div className="relative group">
                <textarea 
                  name="message"
                  id="message"
                  required
                  rows={3}
                  placeholder="Conte-nos um pouco sobre o seu projeto..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#2563eb] transition-colors resize-none peer"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="group relative w-full py-5 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {/* Button Hover Effect */}
                <div className="absolute inset-0 bg-[#2563eb] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                
                <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors duration-500">
                  Enviar Solicitação
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <p className="text-center text-sm text-zinc-500 font-light mt-[-10px]">
                Nossa equipe entrará em contato em até 24h úteis.
              </p>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}