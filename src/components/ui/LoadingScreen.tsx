'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';

export default function LoadingScreen() {
  const { t } = useLanguage();

  return (
    <motion.div className="fixed inset-0 bg-demicorp-black flex items-center justify-center z-50" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <div className="text-center">
        <motion.div className="relative w-24 h-24 mx-auto mb-8" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
          <motion.div className="absolute inset-0 rounded-full border-2 border-transparent border-t-demicorp-purple" animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="absolute inset-3 rounded-full border-2 border-transparent border-t-demicorp-cyan" animate={{ rotate: -360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="absolute inset-6 rounded-full border-2 border-transparent border-t-demicorp-blue" animate={{ rotate: 360 }} transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span className="text-2xl font-display font-bold gradient-text" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>D</motion.span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h2 className="text-2xl font-display font-bold text-demicorp-white mb-2 tracking-tight">DEMI<span className="gradient-text">CORP</span></h2>
          <p className="text-xs font-mono text-demicorp-gray/60 tracking-[0.3em] uppercase">{t.loading}</p>
        </motion.div>
        <motion.div className="w-48 h-[2px] bg-white/5 rounded-full mx-auto mt-6 overflow-hidden">
          <motion.div className="h-full bg-gradient-to-r from-demicorp-purple via-demicorp-cyan to-demicorp-blue rounded-full" initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 2, ease: 'easeInOut' }} />
        </motion.div>
      </div>
    </motion.div>
  );
}
