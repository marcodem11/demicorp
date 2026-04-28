'use client';

import dynamic from 'next/dynamic';

const AppContent = dynamic(() => import('@/components/AppContent'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-ink flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-14 h-14 mx-auto mb-5">
          <div className="absolute inset-0 rounded-full border border-transparent border-t-accent animate-spin" />
          <div
            className="absolute inset-2 rounded-full border border-transparent border-t-accent-soft animate-spin"
            style={{ animationDirection: 'reverse', animationDuration: '1.6s' }}
          />
        </div>
        <p className="text-[11px] font-mono text-mute tracking-[0.3em] uppercase">
          Caricamento
        </p>
      </div>
    </div>
  ),
});

export default function Home() {
  return <AppContent />;
}
