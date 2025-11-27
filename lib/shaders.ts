// GPU shader programs for De Jong Attractor visualization
// The vertex shader transforms each point, the fragment shader colors it

export const vertexShader = `
  // Inputs: starting position and animation time
  attribute vec2 a_position;
  uniform float u_time;

  void main() {
    // Calculate time-varying parameters using oscillating sinusoids
    // Each parameter oscillates at a slightly different frequency
    float a = 3.0 * sin(u_time);
    float b = 3.0 * sin(1.1 * u_time);
    float c = 3.0 * sin(1.2 * u_time);
    float d = 3.0 * sin(1.3 * u_time);

    // Start from random initial position
    vec2 pos = a_position;

    // Apply De Jong attractor equations iteratively
    // Each iteration pulls the point toward the chaotic attractor shape
    for (int i = 0; i < 100; i++) {
      float nextX = sin(a * pos.y) - cos(b * pos.x);
      float nextY = sin(c * pos.x) - cos(d * pos.y);
      pos = vec2(nextX, nextY);
    }

    // Scale down to fit in normalized device coordinates (-1 to 1)
    gl_Position = vec4(pos * 0.5, 0.0, 1.0);
    gl_PointSize = 1.0;
  }
`;

export const fragmentShader = `
  precision mediump float;
  uniform vec3 u_color;
  uniform float u_alpha;

  void main() {
    // Output semi-transparent color (adapts to light/dark mode)
    // Overlapping points accumulate brightness to create gradient effect
    gl_FragColor = vec4(u_color, u_alpha);
  }
`;
