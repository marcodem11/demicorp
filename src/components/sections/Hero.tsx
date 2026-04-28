'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Scene3D = dynamic(() => import('@/components/three/Scene3D'), { ssr: false });

export default function Hero() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const formatter = new Intl.DateTimeFormat('it-IT', {
        timeZone: 'Europe/Rome',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTime(formatter.format(d));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-end pb-16 px-6 lg:px-12 pt-32"
    >
      <div className="absolute inset-0 wash" />
      <div className="absolute inset-0 grid-hairline opacity-60" />
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <Scene3D particleCount={1200} particleColor="#c4f042" />
      </div>

      {/* Top meta row */}
      <div className="absolute top-28 left-6 lg:left-12 right-6 lg:right-12 flex items-start justify-between text-xs font-mono text-mute">
        <div className="space-y-1">
          <p className="text-accent/80">[ N° 01 — INDEX ]</p>
          <p>Puglia, IT · Remote-first</p>
        </div>
        <div className="text-right space-y-1">
          <p>Roma · {time || '—'}</p>
          <p className="text-bone">Disponibile · Q2 2026</p>
        </div>
      </div>

      {/* Main name */}
      <div className="relative max-w-7xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow mb-8"
        >
          // Full Stack Developer · 5+ anni di esperienza
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="headline text-chalk text-[18vw] md:text-[14vw] lg:text-[11.5rem] xl:text-[13rem] leading-[0.85]"
        >
          Marco
          <br />
          <span className="inline-flex items-baseline gap-4">
            De Michele<span className="text-accent">.</span>
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          <div className="md:col-span-5 lg:col-span-4">
            <p className="text-bone text-base md:text-lg leading-relaxed">
              Costruisco prodotti digitali moderni — applicazioni web e mobile,
              dashboard e automazioni AI — pensate per essere{' '}
              <span className="text-chalk">veloci</span>,{' '}
              <span className="text-chalk">scalabili</span> e{' '}
              <span className="text-accent">belle da usare</span>.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7 lg:col-start-8">
            <p className="eyebrow mb-2">Attualmente</p>
            <p className="text-chalk text-sm leading-relaxed">
              Senior Full Stack
              <br />
              <span className="text-mute">@ Corsi.it · Remote</span>
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-11">
            <p className="eyebrow mb-2">Stack</p>
            <p className="text-chalk text-sm leading-relaxed">
              React · Next · TS
              <br />
              <span className="text-mute">Laravel · Flutter</span>
            </p>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-20 flex items-center gap-3 text-xs font-mono text-mute"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-accent/60 to-transparent"
          />
          <span>scorri per esplorare</span>
        </motion.div>
      </div>
    </section>
  );
}
