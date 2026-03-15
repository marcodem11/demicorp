// @ts-nocheck
'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import ParticleField from './ParticleField';
import FloatingGeometry from './FloatingGeometry';

interface Scene3DProps {
  className?: string;
  particleCount?: number;
  showGeometry?: boolean;
  particleColor?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export default function Scene3D({
  className = '',
  particleCount,
  showGeometry = true,
  particleColor = '#8b5cf6',
  intensity = 'high',
}: Scene3DProps) {
  const counts = { low: 800, medium: 1500, high: 2500 };
  const count = particleCount ?? counts[intensity];

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#06d6a0" />
          <pointLight position={[0, 0, 5]} intensity={0.2} color="#4361ee" />

          <ParticleField count={count} color={particleColor} />
          {showGeometry && <FloatingGeometry />}

          <fog attach="fog" args={['#0a0a0a', 5, 25]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
