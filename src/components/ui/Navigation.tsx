'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Index', href: '#home', n: '01' },
  { label: 'Profilo', href: '#about', n: '02' },
  { label: 'Esperienze', href: '#work', n: '03' },
  { label: 'Stack', href: '#stack', n: '04' },
  { label: 'Lavori', href: '#projects', n: '05' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-6 lg:px-12 transition-all duration-500 ${
            isScrolled ? '' : ''
          }`}
        >
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled
                ? 'border border-line bg-ink/70 backdrop-blur-xl rounded-full px-5 py-2.5'
                : ''
            }`}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#home');
              }}
              className="flex items-center gap-2.5 group"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs tracking-[0.3em] text-chalk uppercase">
                MDM
              </span>
              <span className="hidden sm:inline font-mono text-xs tracking-[0.2em] text-mute">
                / Marco De Michele
              </span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = activeSection === link.href.replace('#', '');
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`relative px-4 py-2 text-xs font-mono tracking-wider uppercase transition-colors ${
                      active ? 'text-chalk' : 'text-mute hover:text-bone'
                    }`}
                  >
                    <span className="text-accent/50 mr-2">{link.n}</span>
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://github.com/marcodem11"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs tracking-wider text-bone hover:text-accent transition-colors"
              >
                GitHub ↗
              </a>
            </div>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center"
              aria-label="menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  className="block h-[1.5px] bg-chalk rounded-full origin-left"
                  animate={
                    isMobileOpen
                      ? { rotate: 45, width: '120%' }
                      : { rotate: 0, width: '100%' }
                  }
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-[1.5px] bg-chalk rounded-full"
                  animate={
                    isMobileOpen
                      ? { opacity: 0, x: -10 }
                      : { opacity: 1, x: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-[1.5px] bg-chalk rounded-full origin-left"
                  animate={
                    isMobileOpen
                      ? { rotate: -45, width: '120%' }
                      : { rotate: 0, width: '100%' }
                  }
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-ink/96 backdrop-blur-xl md:hidden flex flex-col items-start justify-center px-8 gap-2"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(link.href)}
                className="headline text-5xl text-chalk text-left flex items-baseline gap-4"
              >
                <span className="font-mono text-xs text-accent">{link.n}</span>
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
