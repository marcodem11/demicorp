'use client';

import SmoothScroll from '@/components/ui/SmoothScroll';
import Navigation from '@/components/ui/Navigation';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/ui/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import LoadingScreen from '@/components/ui/LoadingScreen';
import { useState, useEffect } from 'react';

export default function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navigation />

      <main className="noise-overlay">
        <Hero />

        <div className="relative h-px mx-auto max-w-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-demicorp-purple/30 to-transparent" />
        </div>

        <Services />

        <div className="relative h-px mx-auto max-w-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-demicorp-cyan/30 to-transparent" />
        </div>

        <About />

        <div className="relative h-px mx-auto max-w-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-demicorp-blue/30 to-transparent" />
        </div>

        <Projects />

        <div className="relative h-px mx-auto max-w-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-demicorp-violet/30 to-transparent" />
        </div>

        <Team />

        <div className="relative h-px mx-auto max-w-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-demicorp-pink/30 to-transparent" />
        </div>

        <Contact />
      </main>

      <Footer />
    </SmoothScroll>
  );
}
