import React, { useEffect, useRef } from 'react';

const NeonHeroBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const gl = canvas.getContext('webgl');

        const vertexShaderSource = `
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
            vUv = position;
            gl_Position = vec4(position, 0.0, 1.0);
        }
        `;

        const fragmentShaderSource = `
        precision mediump float;
        varying vec2 vUv;

        void main() {
            vec3 color = vec3(1.0, 0.5, 0.0);  // Orange color
            float dist = length(vUv - vec2(0.5));
            gl_FragColor = vec4(color * (1.0 - dist), 1.0);
        }
        `;

        // Compile shaders and set up program...

        // Handle resizing
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            gl.viewport(0, 0, canvas.width, canvas.height);
            // Render scene here...
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();  // Initial resize

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default NeonHeroBackground;
