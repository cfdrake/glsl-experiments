#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

vec3 rect(in vec2 st, in vec3 fill, in vec3 border, in float sz) {
  float l = step(sz, st.x);
  float b = step(sz, st.y);
  float r = step(sz, 1. - st.x);
  float t = step(sz, 1. - st.y);
  float pct = l * b * r * t;

  return mix(fill, border, pct);
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;

  vec3 color = rect(st, vec3(1.), vec3(0.), 0.05);

  gl_FragColor = vec4(color, 1.);
}
