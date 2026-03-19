import React from 'react';
import { Canvas } from 'react-three-fiber';
import { ShaderMaterial } from 'three';

const NeonHeroBackground = () => {
  const fragmentShader = `
    uniform vec3 color1;
    uniform vec3 color2;
    varying vec2 vUv;

    void main() {
      vec3 color = mix(color1, color2, vUv.y);
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  const vertexShader = `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const material = new ShaderMaterial({
    uniforms: {
      color1: { value: new THREE.Color(1.0, 0.5, 0.1) },  // Bright orange
      color2: { value: new THREE.Color(0.3, 0.0, 0.5) },  // Synthwave purple
    },
    vertexShader,
    fragmentShader,
  });

  return (
    <Canvas>
      <mesh material={material}>
        <planeBufferGeometry attach='geometry' args={[5, 5]} />
      </mesh>
    </Canvas>
  );
};

export default NeonHeroBackground;
