/* eslint-disable @typescript-eslint/no-namespace */
import { Object3DNode, BufferGeometryNode, MaterialNode } from '@react-three/fiber';
import * as THREE from 'three';

declare module '@react-three/fiber' {
  interface ThreeElements {
    mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
    group: Object3DNode<THREE.Group, typeof THREE.Group>;
    points: Object3DNode<THREE.Points, typeof THREE.Points>;
    ambientLight: Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>;
    pointLight: Object3DNode<THREE.PointLight, typeof THREE.PointLight>;
    fog: Object3DNode<THREE.Fog, typeof THREE.Fog>;
    bufferGeometry: BufferGeometryNode<THREE.BufferGeometry, typeof THREE.BufferGeometry>;
    bufferAttribute: any;
    pointsMaterial: MaterialNode<THREE.PointsMaterial, typeof THREE.PointsMaterial>;
    meshBasicMaterial: MaterialNode<THREE.MeshBasicMaterial, typeof THREE.MeshBasicMaterial>;
    icosahedronGeometry: BufferGeometryNode<THREE.IcosahedronGeometry, typeof THREE.IcosahedronGeometry>;
    boxGeometry: BufferGeometryNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>;
    torusGeometry: BufferGeometryNode<THREE.TorusGeometry, typeof THREE.TorusGeometry>;
    octahedronGeometry: BufferGeometryNode<THREE.OctahedronGeometry, typeof THREE.OctahedronGeometry>;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      group: any;
      points: any;
      ambientLight: any;
      pointLight: any;
      fog: any;
      bufferGeometry: any;
      bufferAttribute: any;
      pointsMaterial: any;
      meshBasicMaterial: any;
      icosahedronGeometry: any;
      boxGeometry: any;
      torusGeometry: any;
      octahedronGeometry: any;
    }
  }
}
