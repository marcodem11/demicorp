'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 'ai-automation',
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
        <circle cx="40" cy="40" r="35" stroke="url(#grad1)" strokeWidth="1.5" opacity="0.3" />
        <circle cx="40" cy="40" r="25" stroke="url(#grad1)" strokeWidth="1" opacity="0.5" />
        <circle cx="40" cy="40" r="8" fill="url(#grad1)" />
        <line x1="40" y1="5" x2="40" y2="15" stroke="#8b5cf6" strokeWidth="1.5" />
        <line x1="40" y1="65" x2="40" y2="75" stroke="#8b5cf6" strokeWidth="1.5" />
        <line x1="5" y1="40" x2="15" y2="40" stroke="#06d6a0" strokeWidth="1.5" />
        <line x1="65" y1="40" x2="75" y2="40" stroke="#06d6a0" strokeWidth="1.5" />
        <circle cx="40" cy="12" r="3" fill="#8b5cf6" />
        <circle cx="40" cy="68" r="3" fill="#8b5cf6" />
        <circle cx="12" cy="40" r="3" fill="#06d6a0" />
        <circle cx="68" cy="40" r="3" fill="#06d6a0" />
        <path d="M25 25 L40 40 L55 25" stroke="#4361ee" strokeWidth="1.5" fill="none" />
        <path d="M25 55 L40 40 L55 55" stroke="#ff006e" strokeWidth="1.5" fill="none" />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06d6a0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'AI Automation',
    subtitle: 'Intelligenza che lavora per te',
    description:
      'Progettiamo sistemi di automazione basati su intelligenza artificiale che trasformano processi complessi in flussi automatizzati, efficienti e scalabili. Dall\'analisi dati al decision-making autonomo.',
    features: ['Machine Learning', 'NLP & Chatbot', 'Process Automation', 'Predictive Analytics'],
    color: '#8b5cf6',
    gradient: 'from-purple-500/20 to-violet-500/20',
  },
  {
    id: 'game-dev',
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
        <polygon points="40,8 72,24 72,56 40,72 8,56 8,24" stroke="url(#grad2)" strokeWidth="1.5" fill="none" />
        <polygon points="40,16 60,28 60,52 40,64 20,52 20,28" stroke="#06d6a0" strokeWidth="1" opacity="0.5" />
        <polygon points="40,24 52,32 52,48 40,56 28,48 28,32" fill="url(#grad2)" opacity="0.3" />
        <circle cx="40" cy="40" r="5" fill="#06d6a0" />
        <line x1="40" y1="8" x2="40" y2="24" stroke="#06d6a0" strokeWidth="1" opacity="0.5" />
        <line x1="72" y1="24" x2="52" y2="32" stroke="#4361ee" strokeWidth="1" opacity="0.5" />
        <line x1="8" y1="24" x2="28" y2="32" stroke="#8b5cf6" strokeWidth="1" opacity="0.5" />
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06d6a0" />
            <stop offset="100%" stopColor="#4361ee" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: '3D Game Development',
    subtitle: 'Mondi che prendono vita',
    description:
      'Creiamo esperienze di gioco immersive con grafica 3D all\'avanguardia. Dal concept al deploy, sviluppiamo videogiochi che spingono i limiti della tecnologia e dell\'immaginazione.',
    features: ['Unreal Engine', 'Unity 3D', 'WebGL Games', 'VR/AR Experiences'],
    color: '#06d6a0',
    gradient: 'from-emerald-500/20 to-cyan-500/20',
  },
  {
    id: 'software-dev',
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
        <rect x="10" y="10" width="60" height="60" rx="8" stroke="url(#grad3)" strokeWidth="1.5" opacity="0.3" />
        <rect x="18" y="18" width="44" height="44" rx="4" stroke="#4361ee" strokeWidth="1" opacity="0.5" />
        <path d="M30 32 L22 40 L30 48" stroke="#4361ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M50 32 L58 40 L50 48" stroke="#ff006e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="44" y1="28" x2="36" y2="52" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4361ee" />
            <stop offset="100%" stopColor="#ff006e" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Software Development',
    subtitle: 'Codice che cambia tutto',
    description:
      'Sviluppiamo soluzioni software custom su misura — da web app enterprise a piattaforme SaaS, da API complesse a sistemi distribuiti. Ogni riga di codice è pensata per performance e scalabilità.',
    features: ['Web Applications', 'Mobile Apps', 'Cloud & DevOps', 'API Development'],
    color: '#4361ee',
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      <div
        className={`relative p-8 md:p-10 rounded-2xl glass-strong hover:bg-white/[0.08] transition-all duration-500 h-full`}
      >
        {/* Glow effect on hover */}
        <div
          className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${service.color}33, transparent 50%, ${service.color}22)`,
          }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-6">{service.icon}</div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-display font-bold text-demicorp-white mb-2">
            {service.title}
          </h3>
          <p
            className="text-sm font-mono uppercase tracking-wider mb-4"
            style={{ color: service.color }}
          >
            {service.subtitle}
          </p>

          {/* Description */}
          <p className="text-demicorp-gray leading-relaxed mb-6 font-body">
            {service.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.features.map((feature) => (
              <span
                key={feature}
                className="px-3 py-1 rounded-full text-xs font-mono glass"
                style={{ color: service.color }}
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href={`#${service.id}`}
            className="inline-flex items-center gap-2 text-sm font-display font-semibold group/link"
            style={{ color: service.color }}
            whileHover={{ x: 5 }}
          >
            Scopri di più
            <svg
              className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-title-line', {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power4.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative py-32 md:py-40">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-demicorp-purple/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="overflow-hidden">
            <p className="services-title-line text-sm font-mono text-demicorp-violet uppercase tracking-[0.3em] mb-4">
              I nostri servizi
            </p>
          </div>
          <div className="overflow-hidden">
            <h2 className="services-title-line text-4xl md:text-6xl lg:text-7xl font-display font-bold">
              <span className="text-demicorp-white">Cosa </span>
              <span className="gradient-text">Facciamo</span>
            </h2>
          </div>
          <div className="overflow-hidden mt-4">
            <p className="services-title-line text-lg text-demicorp-gray max-w-2xl mx-auto font-body">
              Tre pilastri di eccellenza tecnologica per portare la tua visione nel futuro
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
