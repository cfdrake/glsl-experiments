#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;

  vec2 center = vec2(0.5, 0.5);
  float dist = distance(center, st);

  vec3 color = vec3(dist);

  gl_FragColor = vec4(color, 1.);
}
