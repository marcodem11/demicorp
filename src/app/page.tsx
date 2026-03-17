'use client';

import dynamic from 'next/dynamic';
import { LanguageProvider } from '@/i18n/LanguageContext';

const AppContent = dynamic(() => import('@/components/AppContent'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#8b5cf6] animate-spin" />
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-[#06d6a0] animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
          <div className="absolute inset-4 rounded-full border-2 border-transparent border-t-[#4361ee] animate-spin" style={{ animationDuration: '2s' }} />
        </div>
        <p className="text-sm font-mono text-[#888] tracking-widest uppercase">Loading Demicorp</p>
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
