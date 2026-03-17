'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/i18n/LanguageContext';

const Scene3D = dynamic(() => import('../three/Scene3D'), { ssr: false });

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });
      tl.from('.hero-line', {
        y: 120, opacity: 0, rotationX: -80, stagger: 0.15, duration: 1.2, ease: 'power4.out',
      })
        .from('.hero-subtitle', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .from('.hero-cta', { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .from('.hero-badge', { scale: 0, opacity: 0, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.4')
        .from('.hero-scroll-indicator', { y: -20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.2');
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D intensity="high" showGeometry={true} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-demicorp-black/90 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0a0a0a_70%)] z-[1]" />

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <motion.div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8" whileHover={{ scale: 1.05 }}>
          <span className="w-2 h-2 rounded-full bg-demicorp-cyan animate-pulse" />
          <span className="text-sm font-mono text-demicorp-gray tracking-wider uppercase">{t.hero.badge}</span>
        </motion.div>

        <h1 className="mb-6">
          <div className="overflow-hidden">
            <div className="hero-line text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter">
              <span className="text-demicorp-white">DEMI</span>
              <span className="gradient-text">CORP</span>
            </div>
          </div>
          <div className="overflow-hidden mt-2">
            <div className="hero-line text-2xl md:text-4xl lg:text-5xl font-display font-light tracking-wide text-demicorp-gray/80">
              {t.hero.subtitle}
            </div>
          </div>
        </h1>

        <p className="hero-subtitle text-lg md:text-xl text-demicorp-gray max-w-2xl mx-auto mb-12 leading-relaxed font-body">
          {t.hero.description}
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 rounded-xl font-display font-semibold text-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-demicorp-purple to-demicorp-blue rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-demicorp-purple to-demicorp-cyan rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 text-white">{t.hero.ctaPrimary}</span>
          </motion.button>

          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-xl font-display font-semibold text-lg glass hover:bg-white/10 transition-colors duration-300 text-demicorp-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.hero.ctaSecondary}
          </motion.button>
        </div>

        <div className="hero-cta flex justify-center gap-12 mt-16">
          {[
            { value: 'AI', label: 'Powered' },
            { value: '3D', label: 'Immersive' },
            { value: '∞', label: 'Possibilities' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-demicorp-gray font-mono uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs font-mono text-demicorp-gray/50 uppercase tracking-widest">{t.hero.scroll}</span>
        <motion.div className="w-6 h-10 rounded-full border-2 border-demicorp-gray/30 flex justify-center pt-2" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
          <motion.div className="w-1 h-2 rounded-full bg-demicorp-violet" animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }} />
        </motion.div>
      </div>
    </section>
  );
}
