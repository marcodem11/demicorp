'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const projectColors = ['#06d6a0', '#8b5cf6', '#4361ee', '#ff006e'];

const projectVisuals = [
  // City Vault - 3D RPG
  <div key="cv" className="relative w-full h-full bg-gradient-to-br from-emerald-900/40 to-teal-900/20 rounded-xl overflow-hidden">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
      {Array.from({ length: 10 }, (_, i) => (
        <line key={`h${i}`} x1="0" y1={180 + i * 15} x2="400" y2={180 + i * 15 - i * 3} stroke="#06d6a0" strokeWidth="0.5" opacity={0.1 + i * 0.03} />
      ))}
      {Array.from({ length: 15 }, (_, i) => (
        <line key={`v${i}`} x1={i * 30} y1="180" x2={200 + (i - 7) * 15} y2="300" stroke="#06d6a0" strokeWidth="0.5" opacity="0.15" />
      ))}
      <rect x="100" y="100" width="50" height="80" fill="none" stroke="#06d6a0" strokeWidth="1" opacity="0.4" />
      <rect x="105" y="110" width="15" height="15" fill="#06d6a0" opacity="0.2" />
      <rect x="130" y="110" width="15" height="15" fill="#06d6a0" opacity="0.2" />
      <rect x="115" y="155" width="20" height="25" fill="#06d6a0" opacity="0.15" />
      <rect x="200" y="80" width="70" height="100" fill="none" stroke="#4361ee" strokeWidth="1" opacity="0.3" />
      <rect x="210" y="90" width="15" height="15" fill="#4361ee" opacity="0.2" />
      <rect x="240" y="90" width="15" height="15" fill="#4361ee" opacity="0.2" />
      <rect x="210" y="115" width="15" height="15" fill="#4361ee" opacity="0.2" />
      <rect x="240" y="115" width="15" height="15" fill="#4361ee" opacity="0.2" />
      <rect x="300" y="120" width="40" height="60" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" />
      <circle cx="60" cy="50" r="20" fill="none" stroke="#06d6a0" strokeWidth="1" opacity="0.2" />
      <circle cx="60" cy="50" r="10" fill="#06d6a0" opacity="0.08" />
      <circle cx="180" cy="240" r="8" fill="#06d6a0" opacity="0.4"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" /></circle>
      <circle cx="250" cy="230" r="6" fill="#4361ee" opacity="0.3"><animate attributeName="opacity" values="0.1;0.5;0.1" dur="2.5s" repeatCount="indefinite" /></circle>
    </svg>
    <div className="absolute bottom-4 left-4 text-xs font-mono text-emerald-300/60">city_vault.world</div>
  </div>,
  // AI Website Generator
  <div key="aiweb" className="relative w-full h-full bg-gradient-to-br from-purple-900/40 to-violet-900/20 rounded-xl overflow-hidden">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
      {[
        [60, 60], [60, 150], [60, 240],
        [200, 40], [200, 110], [200, 190], [200, 260],
        [340, 100], [340, 200],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="12" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.6" />
          <circle cx={x} cy={y} r="4" fill="#8b5cf6" opacity="0.8"><animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" /></circle>
        </g>
      ))}
      {[
        [60, 60, 200, 40], [60, 60, 200, 110], [60, 150, 200, 110], [60, 150, 200, 190],
        [60, 240, 200, 190], [60, 240, 200, 260], [200, 40, 340, 100], [200, 110, 340, 100],
        [200, 190, 340, 200], [200, 260, 340, 200],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3">
          <animate attributeName="opacity" values="0.1;0.5;0.1" dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" />
        </line>
      ))}
    </svg>
    <div className="absolute bottom-4 left-4 text-xs font-mono text-purple-300/60">ai_generator.deploy</div>
  </div>,
  // Batcomputer
  <div key="bat" className="relative w-full h-full bg-gradient-to-br from-blue-900/40 to-indigo-900/20 rounded-xl overflow-hidden">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
      <rect x="50" y="30" width="300" height="200" rx="10" fill="none" stroke="#4361ee" strokeWidth="1" opacity="0.3" />
      <rect x="60" y="40" width="280" height="25" rx="4" fill="#4361ee" opacity="0.1" />
      <circle cx="75" cy="52" r="4" fill="#ff006e" opacity="0.6" />
      <circle cx="90" cy="52" r="4" fill="#06d6a0" opacity="0.6" />
      <circle cx="105" cy="52" r="4" fill="#4361ee" opacity="0.6" />
      <rect x="70" y="80" width="120" height="8" rx="2" fill="#4361ee" opacity="0.15"><animate attributeName="width" values="40;120;80;120" dur="3s" repeatCount="indefinite" /></rect>
      <rect x="70" y="100" width="80" height="8" rx="2" fill="#8b5cf6" opacity="0.15"><animate attributeName="width" values="80;60;100;80" dur="2.5s" repeatCount="indefinite" /></rect>
      <rect x="70" y="120" width="160" height="8" rx="2" fill="#06d6a0" opacity="0.15"><animate attributeName="width" values="100;160;120;160" dur="3.5s" repeatCount="indefinite" /></rect>
      <rect x="70" y="140" width="100" height="8" rx="2" fill="#4361ee" opacity="0.15" />
      <rect x="70" y="160" width="140" height="8" rx="2" fill="#8b5cf6" opacity="0.1" />
      <rect x="70" y="190" width="15" height="15" rx="2" fill="#4361ee" opacity="0.3"><animate attributeName="opacity" values="0.1;0.5;0.1" dur="1s" repeatCount="indefinite" /></rect>
      <rect x="90" y="193" width="60" height="8" rx="2" fill="#4361ee" opacity="0.2" />
    </svg>
    <div className="absolute bottom-4 left-4 text-xs font-mono text-blue-300/60">batcomputer.ai</div>
  </div>,
  // AI Video Pipeline
  <div key="video" className="relative w-full h-full bg-gradient-to-br from-pink-900/40 to-red-900/20 rounded-xl overflow-hidden">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
      {[
        [50, 150, 50, 30], [150, 150, 60, 35], [260, 150, 55, 30], [360, 150, 50, 30],
      ].map(([x, y, w, h], i) => (
        <g key={i}>
          <rect x={x! - w! / 2} y={y! - h! / 2} width={w} height={h} rx="6" fill="none" stroke="#ff006e" strokeWidth="1" opacity="0.4" />
          <rect x={x! - w! / 2 + 5} y={y! - h! / 2 + 5} width={10} height={3} rx="1" fill="#ff006e" opacity="0.5">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur={`${1 + i * 0.4}s`} repeatCount="indefinite" />
          </rect>
        </g>
      ))}
      {[
        [75, 150, 120, 150], [210, 150, 232, 150], [338, 150, 335, 150],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ff006e" strokeWidth="1.5" opacity="0.3" strokeDasharray="6 4">
          <animate attributeName="strokeDashoffset" from="10" to="0" dur="0.8s" repeatCount="indefinite" />
        </line>
      ))}
      <text x="50" y="105" fill="#ff006e" opacity="0.4" fontSize="8" fontFamily="monospace" textAnchor="middle">Telegram</text>
      <text x="150" y="105" fill="#8b5cf6" opacity="0.4" fontSize="8" fontFamily="monospace" textAnchor="middle">ChatGPT</text>
      <text x="260" y="105" fill="#06d6a0" opacity="0.4" fontSize="8" fontFamily="monospace" textAnchor="middle">Veo</text>
      <text x="360" y="105" fill="#4361ee" opacity="0.4" fontSize="8" fontFamily="monospace" textAnchor="middle">YouTube</text>
      <polygon points="45,145 45,155 55,150" fill="#ff006e" opacity="0.4"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" repeatCount="indefinite" /></polygon>
    </svg>
    <div className="absolute bottom-4 left-4 text-xs font-mono text-pink-300/60">video_pipeline.n8n</div>
  </div>,
];

function ProjectCard({ project, index, exploreText }: { project: { title: string; category: string; description: string; tech: string[]; metrics: Record<string, string> }; index: number; exploreText: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const isEven = index % 2 === 0;
  const color = projectColors[index];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -80 : 80 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
        <div className="w-full lg:w-1/2">
          <motion.div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-strong" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            {projectVisuals[index]}
            <div className="absolute inset-0 bg-gradient-to-t from-demicorp-black/60 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono glass" style={{ color }}>{project.category}</span>
            </div>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-demicorp-white mb-2">{project.title}</h3>
          <p className="text-sm font-mono uppercase tracking-wider mb-4" style={{ color }}>{project.category}</p>
          <p className="text-demicorp-gray font-body leading-relaxed mb-6">{project.description}</p>
          <div className="flex gap-6 mb-6">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key}>
                <div className="text-xl font-display font-bold" style={{ color }}>{value}</div>
                <div className="text-xs text-demicorp-gray font-mono uppercase">{key}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono glass text-demicorp-gray">{tech}</span>
            ))}
          </div>
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-semibold text-sm"
            style={{ background: `${color}20`, color }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {exploreText}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-title-line', {
        scrollTrigger: { trigger: '.projects-title-line', start: 'top 85%', toggleActions: 'play none none reverse' },
        y: 60, opacity: 0, stagger: 0.15, duration: 1, ease: 'power4.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative py-32 md:py-40">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-demicorp-blue/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-demicorp-purple/5 rounded-full blur-[180px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="overflow-hidden"><p className="projects-title-line text-sm font-mono text-demicorp-blue uppercase tracking-[0.3em] mb-4">{t.projects.label}</p></div>
          <div className="overflow-hidden">
            <h2 className="projects-title-line text-4xl md:text-6xl lg:text-7xl font-display font-bold">
              <span className="text-demicorp-white">{t.projects.title1}</span>
              <span className="gradient-text">{t.projects.title2}</span>
            </h2>
          </div>
          <div className="overflow-hidden mt-4"><p className="projects-title-line text-lg text-demicorp-gray max-w-2xl mx-auto font-body">{t.projects.subtitle}</p></div>
        </div>
        <div className="space-y-24">
          {t.projects.items.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} exploreText={t.projects.explore} />
          ))}
        </div>
      </div>
    </section>
  );
}
