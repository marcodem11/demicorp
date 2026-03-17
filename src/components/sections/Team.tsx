'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.team-title-line', {
        scrollTrigger: { trigger: '.team-title-line', start: 'top 85%', toggleActions: 'play none none reverse' },
        y: 60, opacity: 0, stagger: 0.15, duration: 1, ease: 'power4.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const ceo = t.team.ceo;

  return (
    <section ref={sectionRef} id="team" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 dot-pattern" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-demicorp-purple/3 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="overflow-hidden"><p className="team-title-line text-sm font-mono text-demicorp-violet uppercase tracking-[0.3em] mb-4">{t.team.label}</p></div>
          <div className="overflow-hidden">
            <h2 className="team-title-line text-4xl md:text-6xl lg:text-7xl font-display font-bold">
              <span className="text-demicorp-white">{t.team.title1}</span>
              <span className="gradient-text">{t.team.title2}</span>
            </h2>
          </div>
          <div className="overflow-hidden mt-4"><p className="team-title-line text-lg text-demicorp-gray max-w-2xl mx-auto font-body">{t.team.subtitle}</p></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-demicorp-purple via-demicorp-cyan to-demicorp-blue rounded-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 blur-sm" />
            <div className="relative p-8 md:p-12 rounded-3xl glass-strong">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="relative w-48 h-48 md:w-56 md:h-56">
                    <motion.div
                      className="absolute -inset-2 rounded-full"
                      style={{ background: 'conic-gradient(from 0deg, #8b5cf6, #06d6a0, #4361ee, #ff006e, #8b5cf6)' }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    />
                    <div className="absolute -inset-[2px] rounded-full bg-demicorp-darker" />
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-demicorp-purple/30 to-demicorp-blue/30 flex items-center justify-center overflow-hidden">
                      <span className="text-5xl md:text-6xl font-display font-bold gradient-text">MD</span>
                      <div className="absolute inset-0 grid-bg opacity-30" />
                    </div>
                  </div>
                  <motion.div
                    className="absolute -bottom-2 -right-2 flex items-center gap-2 px-3 py-1.5 rounded-full glass glow-purple"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="w-2 h-2 rounded-full bg-demicorp-cyan animate-pulse" />
                    <span className="text-xs font-mono text-demicorp-white">CEO</span>
                  </motion.div>
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-demicorp-white mb-1">{ceo.name}</h3>
                  <p className="text-lg font-mono text-demicorp-violet mb-4">{ceo.role}</p>
                  <p className="text-demicorp-gray font-body leading-relaxed mb-6 max-w-xl">{ceo.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                    {ceo.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono glass text-demicorp-violet"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.15)' }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-3 justify-center md:justify-start">
                    {[
                      { platform: 'github', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg> },
                      { platform: 'linkedin', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
                    ].map(({ platform, icon }) => (
                      <motion.a
                        key={platform}
                        href="#"
                        className="w-10 h-10 rounded-lg glass flex items-center justify-center text-demicorp-gray hover:text-demicorp-violet transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-block p-8 rounded-2xl glass">
            <h4 className="text-2xl font-display font-bold text-demicorp-white mb-2">{t.team.hiringTitle}</h4>
            <p className="text-demicorp-gray font-body mb-6">{t.team.hiringDesc}</p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-demicorp-purple to-demicorp-blue text-white font-display font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.team.hiringCta}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
