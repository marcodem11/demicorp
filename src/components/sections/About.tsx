'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const valueColors = ['#8b5cf6', '#06d6a0', '#4361ee', '#ff006e'];

export default function About() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-line', {
        scrollTrigger: { trigger: '.about-line', start: 'top 85%', toggleActions: 'play none none reverse' },
        scaleX: 0, duration: 1.5, ease: 'power4.inOut',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const stats = [t.about.stat1, t.about.stat2, t.about.stat3];

  return (
    <section ref={sectionRef} id="about" className="relative py-32 md:py-40 overflow-hidden">
      <motion.div className="absolute top-20 right-0 w-[600px] h-[600px] bg-demicorp-purple/5 rounded-full blur-[200px]" style={{ y: y1 }} />
      <motion.div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-demicorp-cyan/5 rounded-full blur-[150px]" style={{ y: y2 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-sm font-mono text-demicorp-cyan uppercase tracking-[0.3em] mb-4">
              {t.about.label}
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">
              <span className="text-demicorp-white">{t.about.title1}</span>
              <span className="gradient-text">{t.about.title2}</span>
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-4 text-demicorp-gray font-body leading-relaxed">
              <p className="text-lg" dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </motion.div>
            <div className="about-line h-[1px] bg-gradient-to-r from-demicorp-purple via-demicorp-cyan to-transparent my-8 origin-left" />
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-display font-bold gradient-text">
                    {stat.value}<span className="text-demicorp-cyan">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-demicorp-gray font-mono uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <motion.div className="absolute inset-0 rounded-full border border-demicorp-purple/20" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} />
              <motion.div className="absolute inset-8 rounded-full border border-demicorp-cyan/20" animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} />
              <motion.div className="absolute inset-16 rounded-full border border-demicorp-blue/20" animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl md:text-9xl font-display font-bold gradient-text floating">D</div>
                  <div className="text-xs font-mono text-demicorp-gray/60 uppercase tracking-[0.5em] mt-2">Demicorp</div>
                </div>
              </div>
              <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-demicorp-purple" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '0 250px' }} />
              <motion.div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rounded-full bg-demicorp-cyan" animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '-200px 0' }} />
            </div>
          </motion.div>
        </div>

        <div>
          <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
            <span className="text-demicorp-white">{t.about.valuesTitle1}</span>
            <span className="gradient-text-purple">{t.about.valuesTitle2}</span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.values.map((value, index) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group p-6 rounded-xl glass hover:bg-white/[0.06] transition-all duration-500"
              >
                <span className="text-5xl font-display font-bold opacity-20 group-hover:opacity-40 transition-opacity" style={{ color: valueColors[index] }}>{value.number}</span>
                <h4 className="text-xl font-display font-bold text-demicorp-white mt-2 mb-3">{value.title}</h4>
                <p className="text-sm text-demicorp-gray font-body leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
