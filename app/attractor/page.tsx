'use client';
import { useEffect, useRef } from 'react';
import { vertexShader, fragmentShader } from '@/lib/shaders';

export default function ArtPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Get WebGL context
    const gl = canvas.getContext('webgl', {
      alpha: true,
      premultipliedAlpha: true,
    }) as WebGLRenderingContext | null;

    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    // Compile shader helper
    function compileShader(gl: WebGLRenderingContext, source: string, type: number): WebGLShader | null {
      const shader = gl.createShader(type);
      if (!shader) return null;

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    }

    // Compile shaders
    const vShader = compileShader(gl, vertexShader, gl.VERTEX_SHADER);
    const fShader = compileShader(gl, fragmentShader, gl.FRAGMENT_SHADER);

    if (!vShader || !fShader) {
      console.error('Failed to compile shaders');
      return;
    }

    // Create and link program
    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Generate random starting points for particles
    const numPoints = Math.pow(2, 18);
    const positions = new Float32Array(numPoints * 2);

    for (let i = 0; i < positions.length; i++) {
      positions[i] = Math.random() * 2 - 1;
    }

    // Create buffer and upload position data to GPU
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    // Get attribute and uniform locations
    const positionLocation = gl.getAttribLocation(program, 'a_position');
    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const colorLocation = gl.getUniformLocation(program, 'u_color');
    const alphaLocation = gl.getUniformLocation(program, 'u_alpha');

    // Setup attribute pointer
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Enable alpha blending
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Animation state
    const startTimes = [50, 81, 104.4];
    let time = startTimes[Math.floor(Math.random() * startTimes.length)];
    let isRunning = true;
    let lastTime = performance.now();

    // Dark mode colors (white particles)
    const pointColor = [1.0, 1.0, 1.0];
    const pointAlpha = 0.1;

    // Animation loop
    function render() {
      if (!isRunning || !gl) return;

      const now = performance.now();
      const deltaTime = (now - lastTime) / 1000;
      lastTime = now;

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform1f(timeLocation, time);
      gl.uniform3f(colorLocation, pointColor[0], pointColor[1], pointColor[2]);
      gl.uniform1f(alphaLocation, pointAlpha);

      gl.drawArrays(gl.POINTS, 0, numPoints);

      time += 0.003 * deltaTime;

      animationFrameRef.current = requestAnimationFrame(render);
    }

    render();

    return () => {
      isRunning = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      gl.deleteProgram(program);
      gl.deleteShader(vShader);
      gl.deleteShader(fShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={1200}
        height={900}
        className="max-w-full max-h-screen"
        title="Pieter de Jong Attractor"
      />
    </div>
  );
}
