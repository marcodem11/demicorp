'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Servizi', href: '#services' },
  { label: 'Chi Siamo', href: '#about' },
  { label: 'Progetti', href: '#projects' },
  { label: 'Team', href: '#team' },
  { label: 'Contatti', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
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
      {/* Desktop Nav */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
              isScrolled ? 'glass-strong shadow-2xl shadow-black/20' : ''
            }`}
          >
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#home');
              }}
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-demicorp-purple to-demicorp-blue flex items-center justify-center">
                <span className="text-sm font-display font-bold text-white">D</span>
              </div>
              <span className="text-lg font-display font-bold text-demicorp-white tracking-tight">
                DEMI<span className="gradient-text">CORP</span>
              </span>
            </motion.a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 text-sm font-body transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-demicorp-white'
                      : 'text-demicorp-gray hover:text-demicorp-white'
                  }`}
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-demicorp-purple to-demicorp-cyan rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* CTA button */}
            <motion.button
              onClick={() => scrollTo('#contact')}
              className="hidden md:block px-5 py-2 rounded-xl bg-gradient-to-r from-demicorp-purple to-demicorp-blue text-white text-sm font-display font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Parliamone
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden w-10 h-10 rounded-lg glass flex items-center justify-center"
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  className="block h-[2px] bg-demicorp-white rounded-full origin-left"
                  animate={isMobileOpen ? { rotate: 45, width: '120%' } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-[2px] bg-demicorp-white rounded-full"
                  animate={isMobileOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-[2px] bg-demicorp-white rounded-full origin-left"
                  animate={isMobileOpen ? { rotate: -45, width: '120%' } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-demicorp-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => scrollTo(link.href)}
                  className={`text-3xl font-display font-bold ${
                    activeSection === link.href.replace('#', '')
                      ? 'gradient-text'
                      : 'text-demicorp-gray hover:text-demicorp-white'
                  } transition-colors`}
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navLinks.length * 0.08 }}
                onClick={() => scrollTo('#contact')}
                className="mt-4 px-8 py-3 rounded-xl bg-gradient-to-r from-demicorp-purple to-demicorp-blue text-white font-display font-bold"
              >
                Parliamone
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
