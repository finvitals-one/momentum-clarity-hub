import { useEffect, useRef } from 'react';

export const NeonHeroBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl', { alpha: false, antialias: false, preserveDrawingBuffer: false });
        if (!gl) return;

        const vertSrc = [
            'attribute vec2 a_pos;',
            'void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }'
        ].join('\n');

        const fragSrc = [
            'precision highp float;',
            'uniform float u_time;',
            'uniform vec2 u_res;',
            'uniform float u_speed;',
            'uniform float u_glow;',
            '',
            'const float HORIZON = 0.38;',
            '',
            'float hash(vec2 p) {',
            '  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);',
            '}',
            '',
            'float noise(vec2 p) {',
            '  vec2 i = floor(p);',
            '  vec2 f = fract(p);',
            '  f = f * f * (3.0 - 2.0 * f);',
            '  float a = hash(i);',
            '  float b = hash(i + vec2(1.0, 0.0));',
            '  float c = hash(i + vec2(0.0, 1.0));',
            '  float d = hash(i + vec2(1.0, 1.0));',
            '  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);',
            '}',
            '',
            'vec3 sun(vec2 uv, float t) {',
            '  vec2 sunPos = vec2(0.0, HORIZON + 0.18);',
            '  float sunRadius = 0.12;',
            '  float d = length(uv - sunPos);',
            '  float scanline = 0.0;',
            '  if (uv.y < sunPos.y && uv.y > sunPos.y - sunRadius) {',
            '    float band = (sunPos.y - uv.y) / sunRadius;',
            '    float lineSpacing = 0.028 + band * 0.06;',
            '    float lineY = mod(uv.y + 0.001, lineSpacing);',
            '    scanline = smoothstep(0.0, 0.003, lineY) * smoothstep(lineSpacing, lineSpacing - 0.003, lineY);',
            '    scanline *= smoothstep(0.0, 0.4, band);',
            '  }',
            '  float sunMask = smoothstep(sunRadius + 0.003, sunRadius - 0.003, d);',
            '  vec3 sunColorTop = vec3(1.0, 0.7, 0.2);',
            '  vec3 sunColorBot = vec3(1.0, 0.3, 0.5);',
            '  float sunGradient = smoothstep(sunPos.y + sunRadius, sunPos.y - sunRadius, uv.y);',
            '  vec3 sunCol = mix(sunColorTop, sunColorBot, sunGradient);',
            '  sunCol *= sunMask;',
            '  sunCol *= mix(1.0, scanline, smoothstep(sunPos.y, sunPos.y - sunRadius, uv.y) * 0.85);',
            '  float glow1 = exp(-d * 4.0) * 0.5;',
            '  float glow2 = exp(-d * 10.0) * 0.3;',
            '  float glow3 = exp(-d * 25.0) * 0.2;',
            '  vec3 glowCol = vec3(1.0, 0.5, 0.2) * glow1 +',
            '                 vec3(1.0, 0.6, 0.3) * glow2 +',
            '                 vec3(1.0, 0.7, 0.4) * glow3;',
            '  return sunCol + glowCol;',
            '}',
            '',
            'vec3 sky(vec2 uv, float t) {',
            '  float skyY = (uv.y - HORIZON) / (1.0 - HORIZON);',
            '  skyY = clamp(skyY, 0.0, 1.0);',
            '  vec3 colBot = vec3(0.8, 0.4, 0.2);',
            '  vec3 colMid = vec3(0.4, 0.15, 0.35);',
            '  vec3 colTop = vec3(0.08, 0.04, 0.15);',
            '  vec3 col = mix(colBot, colMid, smoothstep(0.0, 0.35, skyY));',
            '  col = mix(col, colTop, smoothstep(0.25, 0.85, skyY));',
            '  float hazeStrength = exp(-skyY * 8.0) * 0.7;',
            '  col += vec3(1.0, 0.5, 0.2) * hazeStrength;',
            '  float starField = hash(floor(uv * 200.0));',
            '  float starMask = smoothstep(0.3, 0.9, skyY);',
            '  float twinkle = sin(t * 2.0 + starField * 50.0) * 0.5 + 0.5;',
            '  float star = smoothstep(0.992, 0.999, starField) * starMask * (0.5 + 0.5 * twinkle);',
            '  col += vec3(0.8, 0.7, 1.0) * star;',
            '  col += sun(uv, t);',
            '  return col;',
            '}',
            '',
            'vec3 grid(vec2 uv, float t) {',
            '  float roadY = HORIZON - uv.y;',
            '  if (roadY <= 0.0) return vec3(0.0);',
            '  float perspective = 1.5 / roadY;',
            '  float worldX = uv.x * perspective;',
            '  float worldZ = perspective;',
            '  float speed = t * u_speed * 3.0;',
            '  worldZ += speed;',
            '  float zLine = abs(fract(worldZ * 0.5) - 0.5);',
            '  float zLineWidth = clamp(perspective * 0.001, 0.01, 0.12);',
            '  float zGrid = smoothstep(zLineWidth, 0.0, zLine);',
            '  float xLine = abs(fract(worldX * 0.25) - 0.5);',
            '  float xLineWidth = clamp(perspective * 0.0005, 0.006, 0.08);',
            '  float xGrid = smoothstep(xLineWidth, 0.0, xLine);',
            '  float gridVal = max(zGrid, xGrid);',
            '  float fadeIn = smoothstep(0.0, 0.05, roadY);',
            '  float proxBright = 0.5 + 0.5 * smoothstep(0.0, 0.4, roadY);',
            '  vec3 gridColor = vec3(1.0, 0.6, 0.2);',
            '  float zMajor = abs(fract(worldZ * 0.125) - 0.5);',
            '  float zMajorLine = smoothstep(zLineWidth * 0.5, 0.0, zMajor);',
            '  float xMajor = abs(fract(worldX * 0.0625) - 0.5);',
            '  float xMajorLine = smoothstep(xLineWidth * 0.5, 0.0, xMajor);',
            '  float majorGrid = max(zMajorLine, xMajorLine);',
            '  vec3 accentColor = vec3(0.1, 0.6, 1.0);',
            '  gridColor = mix(gridColor, accentColor, majorGrid * 0.3);',
            '  float zGlow = exp(-zLine * 20.0) * 0.25;',
            '  float xGlow = exp(-xLine * 20.0) * 0.2;',
            '  float gridGlow = max(zGlow, xGlow);',
            '  vec3 col = gridColor * gridVal * proxBright * fadeIn;',
            '  col += gridColor * gridGlow * fadeIn * 0.6;',
            '  vec3 groundColor = vec3(0.03, 0.02, 0.06);',
            '  col += groundColor;',
            '  float fogBand = exp(-roadY * 10.0);',
            '  col += vec3(0.7, 0.3, 0.4) * fogBand * 0.4;',
            '  return col;',
            '}',
            '',
            'vec3 mountains(vec2 uv, float t) {',
            '  if (uv.y < HORIZON) return vec3(0.0);',
            '  float mountainY = HORIZON;',
            '  float au = abs(uv.x);',
            '  float m1 = noise(vec2(au * 3.0, 0.0)) * 0.08;',
            '  float m2 = noise(vec2(au * 8.0, 1.0)) * 0.03;',
            '  float m3 = noise(vec2(au * 20.0, 2.0)) * 0.01;',
            '  float mountainHeight = m1 + m2 + m3;',
            '  float sideMask = smoothstep(0.15, 0.5, au);',
            '  mountainHeight *= sideMask;',
            '  float mountainTop = HORIZON + mountainHeight;',
            '  float mountainMask = smoothstep(mountainTop + 0.005, mountainTop - 0.002, uv.y);',
            '  vec3 col = vec3(0.015, 0.005, 0.03) * mountainMask;',
            '  float edgeDist = abs(uv.y - mountainTop);',
            '  float edgeGlow = exp(-edgeDist * 200.0) * sideMask;',
            '  col += vec3(0.8, 0.3, 0.5) * edgeGlow * 0.3;',
            '  return col;',
            '}',
            '',
            'vec3 sideGrid(vec2 uv, float t) {',
            '  float roadY = HORIZON - uv.y;',
            '  if (roadY <= 0.0) return vec3(0.0);',
            '  float perspective = 1.5 / roadY;',
            '  float worldX = uv.x * perspective;',
            '  float worldZ = perspective + t * u_speed * 3.0;',
            '  float zLine = abs(fract(worldZ * 0.5) - 0.5);',
            '  float xLine = abs(fract(worldX * 0.25) - 0.5);',
            '  float zLineWidth = clamp(perspective * 0.0008, 0.008, 0.08);',
            '  float xLineWidth = clamp(perspective * 0.0004, 0.004, 0.06);',
            '  float zGrid = smoothstep(zLineWidth, 0.0, zLine);',
            '  float xGrid = smoothstep(xLineWidth, 0.0, xLine);',
            '  float gridVal = max(zGrid, xGrid);',
            '  float fadeIn = smoothstep(0.0, 0.05, roadY);',
            '  vec3 sideColor = vec3(0.6, 0.2, 0.5);',
            '  return sideColor * gridVal * fadeIn * 0.3;',
            '}',
            '',
            'vec3 sunReflection(vec2 uv, float t) {',
            '  float roadY = HORIZON - uv.y;',
            '  if (roadY <= 0.0) return vec3(0.0);',
            '  float reflectWidth = 0.15 / (roadY * 3.0 + 0.3);',
            '  float xDist = abs(uv.x);',
            '  float reflStrength = exp(-xDist * xDist / (reflectWidth * reflectWidth * 0.02));',
            '  float perspective = 1.5 / roadY;',
            '  float worldZ = perspective + t * u_speed * 3.0;',
            '  float shimmer = noise(vec2(uv.x * 30.0, worldZ * 2.0)) * 0.5 + 0.5;',
            '  float gradT = smoothstep(0.0, 0.25, roadY);',
            '  vec3 reflColor = mix(vec3(1.0, 0.6, 0.3), vec3(1.0, 0.4, 0.5), gradT);',
            '  float fadeNear = smoothstep(0.35, 0.05, roadY);',
            '  float fadeFar = smoothstep(0.0, 0.01, roadY);',
            '  return reflColor * reflStrength * shimmer * fadeNear * fadeFar * 0.15;',
            '}',
            '',
            'vec3 centerLine(vec2 uv, float t) {',
            '  float roadY = HORIZON - uv.y;',
            '  if (roadY <= 0.0) return vec3(0.0);',
            '  float perspective = 1.5 / roadY;',
            '  float worldZ = perspective + t * u_speed * 3.0;',
            '  float dashPattern = step(0.5, fract(worldZ * 0.12));',
            '  float lineWidth = 0.003 / (perspective * 0.05 + 0.1);',
            '  lineWidth = clamp(lineWidth, 0.0005, 0.01);',
            '  float lineMask = smoothstep(lineWidth, 0.0, abs(uv.x));',
            '  float distFade = smoothstep(0.0, 0.02, roadY) * smoothstep(0.35, 0.05, roadY);',
            '  return vec3(0.9, 0.8, 0.6) * lineMask * dashPattern * distFade * 0.5;',
            '}',
            '',
            'vec3 roadEdges(vec2 uv, float t) {',
            '  float roadY = HORIZON - uv.y;',
            '  if (roadY <= 0.0) return vec3(0.0);',
            '  float roadHalfWidth = roadY * 0.8 + 0.001;',
            '  float leftEdge = abs(uv.x + roadHalfWidth);',
            '  float rightEdge = abs(uv.x - roadHalfWidth);',
            '  float edgeDist = min(leftEdge, rightEdge);',
            '  float lineWidth = 0.002;',
            '  float edgeLine = smoothstep(lineWidth, 0.0, edgeDist);',
            '  float edgeGlow = exp(-edgeDist * 300.0) * 0.4;',
            '  float distFade = smoothstep(0.0, 0.015, roadY) * smoothstep(0.35, 0.02, roadY);',
            '  vec3 edgeColor = vec3(0.1, 0.7, 1.0);',
            '  return edgeColor * (edgeLine + edgeGlow) * distFade;',
            '}',
            '',
            'float haze(vec2 uv, float t) {',
            '  float n1 = noise(uv * 3.0 + vec2(t * 0.1, 0.0));',
            '  float n2 = noise(uv * 7.0 + vec2(0.0, t * 0.15));',
            '  float n3 = noise(uv * 15.0 + vec2(t * 0.05, t * 0.08));',
            '  return (n1 * 0.5 + n2 * 0.3 + n3 * 0.2);',
            '}',
            '',
            'float vignette(vec2 uv) {',
            '  float d = length(uv * vec2(0.8, 1.0));',
            '  return smoothstep(1.2, 0.4, d);',
            '}',
            '',
            'float scanlines(vec2 fragCoord) {',
            '  return 0.95 + 0.05 * sin(fragCoord.y * 3.14159 * 1.5);',
            '}',
            '',
            'void main() {',
            '  vec2 uv = (gl_FragCoord.xy - u_res * 0.5) / u_res.y;',
            '  vec2 screenUV = gl_FragCoord.xy / u_res;',
            '  float t = u_time;',
            '  vec3 col = vec3(0.0);',
            '  if (uv.y >= HORIZON) {',
            '    col = sky(uv, t);',
            '    vec3 mtn = mountains(uv, t);',
            '    float mtnMask = step(0.001, mtn.r + mtn.g + mtn.b);',
            '    col = mix(col, mtn, mtnMask * 0.7);',
            '    col += mtn * 2.0 * (1.0 - mtnMask);',
            '  }',
            '  col += grid(uv, t);',
            '  col += sideGrid(uv, t);',
            '  col += sunReflection(uv, t);',
            '  col += roadEdges(uv, t);',
            '  col += centerLine(uv, t);',
            '  float horizonDist = abs(uv.y - HORIZON);',
            '  float hazeMask = exp(-horizonDist * 15.0);',
            '  float hazeVal = haze(uv, t);',
            '  col += vec3(0.6, 0.25, 0.4) * hazeVal * hazeMask * 0.15;',
            '  col *= u_glow;',
            '  col *= vignette(uv);',
            '  col *= scanlines(gl_FragCoord.xy);',
            '  col = col / (col + vec3(0.8));',
            '  col = pow(col, vec3(0.95));',
            '  float chromDist = length(uv * vec2(0.5, 0.7));',
            '  float chromShift = chromDist * 0.003;',
            '  vec3 finalCol;',
            '  finalCol.r = col.r * (1.0 + chromShift * 2.0);',
            '  finalCol.g = col.g;',
            '  finalCol.b = col.b * (1.0 + chromShift * 2.0);',
            '  gl_FragColor = vec4(finalCol, 1.0);',
            '}',
        ].join('\n');

        function compile(type, src) {
            var s = gl.createShader(type);
            gl.shaderSource(s, src);
            gl.compileShader(s);
            if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
                console.error('Shader compile error:', gl.getShaderInfoLog(s));
            }
            return s;
        }

        var prog = gl.createProgram();
        gl.attachShader(prog, compile(gl.VERTEX_SHADER, vertSrc));
        gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fragSrc));
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
            console.error('Program link error:', gl.getProgramInfoLog(prog));
        }

        gl.useProgram(prog);

        var buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);

        var aPos = gl.getAttribLocation(prog, 'a_pos');
        gl.enableVertexAttribArray(aPos);
        gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

        var uTime = gl.getUniformLocation(prog, 'u_time');
        var uRes = gl.getUniformLocation(prog, 'u_res');
        var uSpeed = gl.getUniformLocation(prog, 'u_speed');
        var uGlow = gl.getUniformLocation(prog, 'u_glow');

        var speedVal = 1.0;
        var glowVal = 1.0;

        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var needsResize = true;

        function resize() {
            needsResize = false;
            var w = Math.round(canvas.clientWidth * dpr);
            var h = Math.round(canvas.clientHeight * dpr);
            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w;
                canvas.height = h;
                gl.viewport(0, 0, w, h);
                gl.uniform2f(uRes, canvas.width, canvas.height);
            }
        }

        function render(now) {
            if (needsResize) resize();
            gl.uniform1f(uTime, now * 0.001);
            gl.uniform1f(uSpeed, speedVal);
            gl.uniform1f(uGlow, glowVal);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
            requestAnimationFrame(render);
        }

        window.addEventListener('resize', function () {
            needsResize = true;
        });

        resize();
        requestAnimationFrame(render);
    }, []);

    return (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ width: '100%', height: '100%' }} />
    );
};
