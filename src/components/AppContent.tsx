'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SmoothScroll from '@/components/ui/SmoothScroll';
import Navigation from '@/components/ui/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Work from '@/components/sections/Work';
import Stack from '@/components/sections/Stack';
import Projects from '@/components/sections/Projects';
import Footer from '@/components/ui/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import LoadingScreen from '@/components/ui/LoadingScreen';

export default function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      {!isLoading && (
        <SmoothScroll>
          <CustomCursor />
          <Navigation />

          <main className="noise-overlay">
            <Hero />
            <div className="divider mx-6 lg:mx-12" />
            <About />
            <div className="divider mx-6 lg:mx-12" />
            <Work />
            <div className="divider mx-6 lg:mx-12" />
            <Stack />
            <div className="divider mx-6 lg:mx-12" />
            <Projects />
          </main>

          <Footer />
        </SmoothScroll>
      )}
    </>
  );
}
