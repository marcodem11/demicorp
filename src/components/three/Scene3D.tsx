// @ts-nocheck
'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import ParticleField from './ParticleField';

interface Scene3DProps {
  className?: string;
  particleCount?: number;
  particleColor?: string;
}

export default function Scene3D({
  className = '',
  particleCount = 1400,
  particleColor = '#c4f042',
}: Scene3DProps) {
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
          <ambientLight intensity={0.25} />
          <pointLight position={[10, 10, 10]} intensity={0.4} color="#c4f042" />
          <pointLight position={[-10, -10, -10]} intensity={0.2} color="#ffffff" />

          <ParticleField count={particleCount} color={particleColor} size={0.012} />

          <fog attach="fog" args={['#08080b', 6, 22]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
