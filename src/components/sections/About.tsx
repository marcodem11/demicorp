'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    number: '01',
    title: 'Innovazione Radicale',
    description: 'Non seguiamo i trend — li creiamo. Ogni progetto è un\'opportunità per ridefinire lo standard.',
    color: '#8b5cf6',
  },
  {
    number: '02',
    title: 'Eccellenza Tecnica',
    description: 'Codice pulito, architetture scalabili, performance estreme. Zero compromessi sulla qualità.',
    color: '#06d6a0',
  },
  {
    number: '03',
    title: 'Visione Futura',
    description: 'Costruiamo oggi le soluzioni che il mondo userà domani. AI, 3D, cloud-native — siamo pronti.',
    color: '#4361ee',
  },
  {
    number: '04',
    title: 'Impatto Reale',
    description: 'La tecnologia ha senso solo se crea valore. Ogni riga di codice risolve un problema concreto.',
    color: '#ff006e',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal line animation
      gsap.from('.about-line', {
        scrollTrigger: {
          trigger: '.about-line',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        scaleX: 0,
        duration: 1.5,
        ease: 'power4.inOut',
      });

      // Counter animation
      gsap.utils.toArray('.about-counter').forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          textContent: 0,
          duration: 2,
          snap: { textContent: 1 },
          ease: 'power2.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-20 right-0 w-[600px] h-[600px] bg-demicorp-purple/5 rounded-full blur-[200px]"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-demicorp-cyan/5 rounded-full blur-[150px]"
        style={{ y: y2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main about content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          {/* Left - Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-mono text-demicorp-cyan uppercase tracking-[0.3em] mb-4"
            >
              Chi siamo
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8"
            >
              <span className="text-demicorp-white">Il Futuro è </span>
              <span className="gradient-text">Già Qui</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-demicorp-gray font-body leading-relaxed"
            >
              <p className="text-lg">
                <strong className="text-demicorp-white">Demicorp</strong> nasce dalla visione di un futuro in cui
                la tecnologia non è solo uno strumento, ma un&apos;estensione del pensiero umano.
              </p>
              <p>
                Siamo un team di sviluppatori, designer e visionari che uniscono competenze in
                intelligenza artificiale, sviluppo software e creazione di esperienze 3D immersive
                per costruire il domani.
              </p>
              <p>
                Dalla nostra sede, operiamo a livello globale con clienti che condividono la nostra
                ambizione: superare ogni limite tecnologico e creare qualcosa di mai visto prima.
              </p>
            </motion.div>

            {/* Line separator */}
            <div className="about-line h-[1px] bg-gradient-to-r from-demicorp-purple via-demicorp-cyan to-transparent my-8 origin-left" />

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-8"
            >
              {[
                { value: '100', suffix: '%', label: 'Passione' },
                { value: '24', suffix: '/7', label: 'Innovazione' },
                { value: '∞', suffix: '', label: 'Ambizione' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-display font-bold gradient-text">
                    {stat.value}
                    <span className="text-demicorp-cyan">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-demicorp-gray font-mono uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Visual / 3D-like element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Rotating rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-demicorp-purple/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-8 rounded-full border border-demicorp-cyan/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-16 rounded-full border border-demicorp-blue/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl md:text-9xl font-display font-bold gradient-text floating">
                    D
                  </div>
                  <div className="text-xs font-mono text-demicorp-gray/60 uppercase tracking-[0.5em] mt-2">
                    Demicorp
                  </div>
                </div>
              </div>

              {/* Orbiting dots */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-demicorp-purple"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: '0 250px' }}
              />
              <motion.div
                className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rounded-full bg-demicorp-cyan"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: '-200px 0' }}
              />
            </div>
          </motion.div>
        </div>

        {/* Values section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-center mb-16"
          >
            <span className="text-demicorp-white">I Nostri </span>
            <span className="gradient-text-purple">Valori</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group p-6 rounded-xl glass hover:bg-white/[0.06] transition-all duration-500"
              >
                <span
                  className="text-5xl font-display font-bold opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ color: value.color }}
                >
                  {value.number}
                </span>
                <h4 className="text-xl font-display font-bold text-demicorp-white mt-2 mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-demicorp-gray font-body leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
