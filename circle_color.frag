#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;

  vec2 center = vec2(0.5, 0.5);
  float dist = distance(center, st);

  float radius = 0.25;
  vec3 fill = vec3(0., 0., 1.);
  vec3 bg = vec3(0.);

  vec3 color = mix(fill, bg, step(radius, dist));

  gl_FragColor = vec4(color, 1.);
}
