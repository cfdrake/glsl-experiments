#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;

  vec2 center = vec2(0.5 + 0.1*sin(u_time), 0.5 + 0.1*sin(0.8*u_time));
  float dist = distance(center, st);

  float radius = 0.25;
  vec3 red = vec3(1., 0., 0.);
  vec3 blue = vec3(0., 0., 1.);
  vec3 bright = vec3(pow(dist, 0.3) * abs(mod(u_time + dist * 12., 0.5)));
  vec3 color = mix(red, blue, abs(sin(u_time))) * bright;

  gl_FragColor = vec4(color, 1.);
}
