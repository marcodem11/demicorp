'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'NeuralFlow AI',
    category: 'AI Automation',
    description:
      'Piattaforma di automazione AI enterprise che processa milioni di dati in tempo reale con machine learning avanzato. Pipeline automatizzate, decision-making intelligente.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'Redis', 'Docker'],
    color: '#8b5cf6',
    metrics: { accuracy: '99.2%', speed: '<50ms', data: '10M+/day' },
    visual: (
      <div className="relative w-full h-full bg-gradient-to-br from-purple-900/40 to-violet-900/20 rounded-xl overflow-hidden">
        {/* Neural network visualization */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
          {/* Nodes */}
          {[
            [60, 60], [60, 150], [60, 240],
            [200, 40], [200, 110], [200, 190], [200, 260],
            [340, 100], [340, 200],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="12" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.6" />
              <circle cx={x} cy={y} r="4" fill="#8b5cf6" opacity="0.8">
                <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}
          {/* Connections */}
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
        <div className="absolute bottom-4 left-4 text-xs font-mono text-purple-300/60">neural_network.model</div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Void Realm',
    category: '3D Game',
    description:
      'Videogioco 3D sci-fi open world con grafica next-gen, sistema di combattimento dinamico e intelligenza artificiale adattiva dei nemici. Esperienza immersiva totale.',
    tech: ['Unreal Engine 5', 'C++', 'Blueprints', 'Niagara', 'MetaHuman'],
    color: '#06d6a0',
    metrics: { fps: '120 FPS', world: '100km²', players: 'MMO' },
    visual: (
      <div className="relative w-full h-full bg-gradient-to-br from-emerald-900/40 to-teal-900/20 rounded-xl overflow-hidden">
        {/* 3D wireframe landscape */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
          {/* Grid floor */}
          {Array.from({ length: 10 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={180 + i * 15} x2="400" y2={180 + i * 15 - (i * 3)} stroke="#06d6a0" strokeWidth="0.5" opacity={0.1 + i * 0.03} />
          ))}
          {Array.from({ length: 15 }, (_, i) => (
            <line key={`v${i}`} x1={i * 30} y1="180" x2={200 + (i - 7) * 15} y2="300" stroke="#06d6a0" strokeWidth="0.5" opacity="0.15" />
          ))}
          {/* Mountains */}
          <polyline points="0,180 50,120 100,150 150,80 200,130 250,60 300,110 350,90 400,140 400,180" fill="none" stroke="#06d6a0" strokeWidth="1.5" opacity="0.4" />
          <polyline points="0,180 80,140 130,160 180,100 230,145 280,85 330,120 400,160 400,180" fill="none" stroke="#4361ee" strokeWidth="1" opacity="0.2" />
          {/* Sun/Moon */}
          <circle cx="320" cy="50" r="25" fill="none" stroke="#06d6a0" strokeWidth="1" opacity="0.3" />
          <circle cx="320" cy="50" r="15" fill="#06d6a0" opacity="0.1" />
        </svg>
        <div className="absolute bottom-4 left-4 text-xs font-mono text-emerald-300/60">void_realm.world</div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'CloudForge',
    category: 'Software Platform',
    description:
      'Piattaforma SaaS cloud-native per il deployment automatizzato di applicazioni. CI/CD intelligente, monitoring real-time, scaling automatico con zero-downtime.',
    tech: ['Next.js', 'Go', 'Kubernetes', 'Terraform', 'PostgreSQL'],
    color: '#4361ee',
    metrics: { uptime: '99.99%', deploys: '500+/day', latency: '<10ms' },
    visual: (
      <div className="relative w-full h-full bg-gradient-to-br from-blue-900/40 to-indigo-900/20 rounded-xl overflow-hidden">
        {/* Cloud architecture */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
          {/* Containers */}
          {[
            [80, 60, 70, 45], [230, 50, 70, 45], [155, 140, 90, 50], [60, 220, 70, 45], [180, 220, 70, 45], [300, 220, 70, 45],
          ].map(([x, y, w, h], i) => (
            <g key={i}>
              <rect x={x} y={y} width={w} height={h} rx="6" fill="none" stroke="#4361ee" strokeWidth="1" opacity="0.4" />
              <rect x={x! + 5} y={y! + 5} width={10} height={3} rx="1" fill="#4361ee" opacity="0.5">
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur={`${1 + i * 0.4}s`} repeatCount="indefinite" />
              </rect>
            </g>
          ))}
          {/* Connections */}
          {[
            [115, 105, 200, 140], [265, 95, 200, 140], [155, 190, 95, 220], [200, 190, 215, 220], [245, 190, 335, 220],
          ].map(([x1, y1, x2, y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#4361ee" strokeWidth="1" opacity="0.2" strokeDasharray="4 4">
              <animate attributeName="strokeDashoffset" from="8" to="0" dur="1s" repeatCount="indefinite" />
            </line>
          ))}
        </svg>
        <div className="absolute bottom-4 left-4 text-xs font-mono text-blue-300/60">cloudforge.deploy</div>
      </div>
    ),
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -80 : 80 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
        {/* Visual */}
        <div className="w-full lg:w-1/2">
          <motion.div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-strong"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {project.visual}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-demicorp-black/60 via-transparent to-transparent" />

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span
                className="px-3 py-1 rounded-full text-xs font-mono glass"
                style={{ color: project.color }}
              >
                {project.category}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-demicorp-white mb-2">
            {project.title}
          </h3>
          <p
            className="text-sm font-mono uppercase tracking-wider mb-4"
            style={{ color: project.color }}
          >
            {project.category}
          </p>
          <p className="text-demicorp-gray font-body leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="flex gap-6 mb-6">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key}>
                <div className="text-xl font-display font-bold" style={{ color: project.color }}>
                  {value}
                </div>
                <div className="text-xs text-demicorp-gray font-mono uppercase">{key}</div>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono glass text-demicorp-gray"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-semibold text-sm"
            style={{ background: `${project.color}20`, color: project.color }}
            whileHover={{ scale: 1.05, background: `${project.color}30` }}
            whileTap={{ scale: 0.98 }}
          >
            Esplora Progetto
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
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-title-line', {
        scrollTrigger: {
          trigger: '.projects-title-line',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power4.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative py-32 md:py-40">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-demicorp-blue/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-demicorp-purple/5 rounded-full blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="overflow-hidden">
            <p className="projects-title-line text-sm font-mono text-demicorp-blue uppercase tracking-[0.3em] mb-4">
              Portfolio
            </p>
          </div>
          <div className="overflow-hidden">
            <h2 className="projects-title-line text-4xl md:text-6xl lg:text-7xl font-display font-bold">
              <span className="text-demicorp-white">I Nostri </span>
              <span className="gradient-text">Progetti</span>
            </h2>
          </div>
          <div className="overflow-hidden mt-4">
            <p className="projects-title-line text-lg text-demicorp-gray max-w-2xl mx-auto font-body">
              Showcase di innovazione — ogni progetto è una dimostrazione delle nostre capacità
            </p>
          </div>
        </div>

        {/* Projects list */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
