'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-demicorp-purple to-demicorp-blue flex items-center justify-center">
                <span className="text-sm font-display font-bold text-white">D</span>
              </div>
              <span className="text-lg font-display font-bold text-demicorp-white tracking-tight">
                DEMI<span className="gradient-text">CORP</span>
              </span>
            </div>
            <p className="text-demicorp-gray font-body text-sm max-w-sm leading-relaxed">{t.footer.desc}</p>
          </div>
          <div>
            <h4 className="text-sm font-mono text-demicorp-white uppercase tracking-wider mb-4">{t.footer.navTitle}</h4>
            <div className="space-y-2">
              {[t.nav.home, t.nav.services, t.nav.about, t.nav.projects, t.nav.team, t.nav.contact].map((link) => (
                <motion.a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="block text-sm text-demicorp-gray hover:text-demicorp-violet transition-colors font-body" whileHover={{ x: 3 }}>
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-mono text-demicorp-white uppercase tracking-wider mb-4">{t.footer.servicesTitle}</h4>
            <div className="space-y-2">
              {['AI Automation', '3D Game Dev', 'Web Apps', 'Mobile Apps', 'Cloud & DevOps'].map((service) => (
                <motion.a key={service} href="#services" className="block text-sm text-demicorp-gray hover:text-demicorp-cyan transition-colors font-body" whileHover={{ x: 3 }}>
                  {service}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-demicorp-gray/60 font-mono">&copy; {new Date().getFullYear()} Demicorp. All rights reserved.</p>
          <div className="flex gap-4">
            {['GitHub', 'LinkedIn'].map((social) => (
              <motion.a key={social} href="#" className="text-xs text-demicorp-gray/60 hover:text-demicorp-violet transition-colors font-mono" whileHover={{ y: -2 }}>
                {social}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
