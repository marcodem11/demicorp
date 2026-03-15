// @ts-nocheck
'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, MeshTransmissionMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function GlowingSphere({ position, scale, color, speed = 1, distort = 0.4 }: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed?: number;
  distort?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * speed;
    meshRef.current.rotation.x = t * 0.3;
    meshRef.current.rotation.z = t * 0.2;
  });

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          distort={distort}
          speed={speed * 2}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function WireframeBox({ position, scale, color, speed = 0.5 }: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * speed;
    meshRef.current.rotation.x = t;
    meshRef.current.rotation.y = t * 0.7;
  });

  return (
    <Float speed={speed * 1.5} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.3} />
      </mesh>
    </Float>
  );
}

function GlowingTorus({ position, scale, color, speed = 0.4 }: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * speed;
    meshRef.current.rotation.x = t;
    meshRef.current.rotation.y = t * 0.5;
  });

  return (
    <Float speed={speed * 2} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.2}
          metalness={0.9}
          distort={0.2}
          speed={speed}
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
}

function OctahedronWire({ position, scale, color, speed = 0.6 }: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * speed;
    meshRef.current.rotation.x = t * 0.5;
    meshRef.current.rotation.z = t * 0.3;
  });

  return (
    <Float speed={speed} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.4} />
      </mesh>
    </Float>
  );
}

export default function FloatingGeometry() {
  return (
    <group>
      <GlowingSphere position={[-4, 2, -3]} scale={0.8} color="#6c2bd9" speed={0.5} />
      <GlowingSphere position={[5, -1, -5]} scale={0.5} color="#06d6a0" speed={0.7} distort={0.6} />
      <GlowingSphere position={[0, 3, -8]} scale={1.2} color="#4361ee" speed={0.3} distort={0.3} />

      <WireframeBox position={[-6, -2, -4]} scale={1.2} color="#8b5cf6" speed={0.3} />
      <WireframeBox position={[6, 3, -6]} scale={0.8} color="#06d6a0" speed={0.5} />
      <WireframeBox position={[2, -3, -3]} scale={0.6} color="#ff006e" speed={0.4} />

      <GlowingTorus position={[-3, -3, -6]} scale={0.6} color="#4361ee" speed={0.4} />
      <GlowingTorus position={[4, 2, -7]} scale={0.4} color="#ff006e" speed={0.6} />

      <OctahedronWire position={[-5, 1, -5]} scale={0.7} color="#06d6a0" speed={0.5} />
      <OctahedronWire position={[3, -2, -4]} scale={0.5} color="#8b5cf6" speed={0.3} />
    </group>
  );
}
