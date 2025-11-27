'use client';
import { useEffect, useRef , useState } from 'react';
import { vertexShader, fragmentShader } from '@/lib/shaders';
import { useTheme } from '@/components/ThemeProvider';

export default function GenerativeArt() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const { theme } = useTheme();
  const themeRef = useRef(theme);

  // Update theme ref when theme changes
  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  const [displayTime, setDisplayTime] = useState<number>(72.0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Get WebGL context with display-native color space
    const gl = canvas.getContext('webgl', {
      alpha: true,
      premultipliedAlpha: true,
      // @ts-ignore - colorSpace is newer but supported
      colorSpace: 'display-p3'
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
      positions[i] = Math.random() * 2 - 1; // Random value between -1 and 1
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

    // Enable alpha blending for transparency accumulation
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Animation state
    const startTimes = [50, 81, 70.5];
    let time = startTimes[Math.floor(Math.random() * startTimes.length)]; // Pick random start phase
    let frameCount = 0;
    let isRunning = true;

    // Animation loop
    function render() {
      if (!isRunning || !gl) return;

      // Get current theme colors
      const isDark = themeRef.current === 'dark';
      const bgColor = isDark ? [24/255, 24/255, 27/255] : [1.0, 1.0, 1.0];
      const pointColor = isDark ? [1.0, 1.0, 1.0] : [0.0, 0.0, 0.0];
      const pointAlpha = isDark ? 0.1 : 0.7; // Higher opacity for light mode

      // Clear canvas with theme background
      gl.clearColor(bgColor[0], bgColor[1], bgColor[2], 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // Update uniforms
      gl.uniform1f(timeLocation, time);
      gl.uniform3f(colorLocation, pointColor[0], pointColor[1], pointColor[2]);
      gl.uniform1f(alphaLocation, pointAlpha);

      // Draw all points
      gl.drawArrays(gl.POINTS, 0, numPoints);

      // Increment time for next frame (very slow morphing)
      time += 0.00005;
    //   time += 0.001;
    //   frameCount += 1;

    //   if (frameCount % 20 === 0) {
    //     setDisplayTime(time);
    //   }

      // Schedule next frame
      animationFrameRef.current = requestAnimationFrame(render);
    }

    // Start animation
    render();

    // Cleanup on unmount
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
    <section id="art" className="pt-8 px-4">
      <div className="max-w-3xl mx-auto">

        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          className="w-full h-auto bg-white dark:bg-zinc-900"
        />
        {/* <div>
            t = {displayTime}
        </div> */}

      </div>
    </section>
  );
}
