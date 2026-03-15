'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '', service: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-title-line', {
        scrollTrigger: {
          trigger: '.contact-title-line',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power4.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic
    alert('Messaggio inviato! Ti ricontatteremo presto.');
    setFormState({ name: '', email: '', message: '', service: '' });
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-demicorp-purple/5 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="overflow-hidden">
            <p className="contact-title-line text-sm font-mono text-demicorp-pink uppercase tracking-[0.3em] mb-4">
              Contattaci
            </p>
          </div>
          <div className="overflow-hidden">
            <h2 className="contact-title-line text-4xl md:text-6xl lg:text-7xl font-display font-bold">
              <span className="text-demicorp-white">Iniziamo a </span>
              <span className="gradient-text-purple">Costruire</span>
            </h2>
          </div>
          <div className="overflow-hidden mt-4">
            <p className="contact-title-line text-lg text-demicorp-gray max-w-2xl mx-auto font-body">
              Hai un&apos;idea? Parliamone. Trasformiamo la tua visione in realtà.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-demicorp-white mb-6">
              Pronto a fare il salto?
            </h3>
            <p className="text-demicorp-gray font-body leading-relaxed mb-8">
              Che tu abbia bisogno di automazione AI, un videogioco 3D, o una piattaforma software
              custom — siamo qui per trasformare le tue idee più ambiziose in realtà.
            </p>

            {/* Contact methods */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: 'Email',
                  value: 'info@demicorp.com',
                  color: '#8b5cf6',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: 'Location',
                  value: 'Italia — Worldwide',
                  color: '#06d6a0',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: 'Disponibilità',
                  value: '24/7 — Sempre operativi',
                  color: '#4361ee',
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl glass group hover:bg-white/[0.06] transition-all"
                  whileHover={{ x: 5 }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-demicorp-gray uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-demicorp-white font-body">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {['GitHub', 'LinkedIn', 'Twitter', 'Discord'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="px-4 py-2 rounded-lg glass text-sm font-mono text-demicorp-gray hover:text-demicorp-violet transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-xs font-mono text-demicorp-gray uppercase tracking-wider mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass bg-transparent text-demicorp-white font-body placeholder-demicorp-gray/40 focus:outline-none focus:ring-1 focus:ring-demicorp-purple/50 transition-all"
                  placeholder="Il tuo nome"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono text-demicorp-gray uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass bg-transparent text-demicorp-white font-body placeholder-demicorp-gray/40 focus:outline-none focus:ring-1 focus:ring-demicorp-purple/50 transition-all"
                  placeholder="la@tua.email"
                  required
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-xs font-mono text-demicorp-gray uppercase tracking-wider mb-2">
                  Servizio
                </label>
                <select
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass bg-demicorp-darker text-demicorp-white font-body focus:outline-none focus:ring-1 focus:ring-demicorp-purple/50 transition-all"
                  required
                >
                  <option value="">Seleziona un servizio</option>
                  <option value="ai">AI Automation</option>
                  <option value="game">3D Game Development</option>
                  <option value="software">Software Development</option>
                  <option value="other">Altro</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-demicorp-gray uppercase tracking-wider mb-2">
                  Messaggio
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass bg-transparent text-demicorp-white font-body placeholder-demicorp-gray/40 focus:outline-none focus:ring-1 focus:ring-demicorp-purple/50 transition-all resize-none"
                  rows={5}
                  placeholder="Raccontaci la tua idea..."
                  required
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-demicorp-purple to-demicorp-blue text-white font-display font-bold text-lg relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Invia Messaggio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-demicorp-purple to-demicorp-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
