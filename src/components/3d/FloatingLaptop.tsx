import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingLaptop(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/laptop.glb') as any;
  const group = useRef<THREE.Group>();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Laptop.geometry}
        material={materials.Laptop}
      >
        <meshStandardMaterial
          color="#333333"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
      >
        <meshStandardMaterial
          color="#000000"
          metalness={0.5}
          roughness={0.3}
          emissive="#4444ff"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}