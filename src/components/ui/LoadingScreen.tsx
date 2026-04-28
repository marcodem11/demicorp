'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 bg-ink flex items-center justify-center z-50"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-12 h-12"
        >
          <div className="absolute inset-0 border border-line rounded-full" />
          <motion.div
            className="absolute inset-0 border border-transparent border-t-accent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-mono text-[10px] tracking-[0.4em] uppercase text-mute"
        >
          MDM · Portfolio
        </motion.p>
      </div>
    </motion.div>
  );
}
