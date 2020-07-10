#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;

  vec3 col1 = vec3(1.);//0.4980392157, 0.2705882353, 0.631372549);
  vec3 col2 = vec3(0.0);//(.3019607843, 0.631372549, 0.4549019608);

  vec3 pct1 = vec3(abs(0.85 * (sin(u_time * 0.5 + 30. + st.x * 12.) + 0.25 * sin(st.y * 82. + u_time))));
  vec3 pct2 = vec3(abs(0.85 * sin(u_time / 2.) + 0.1 * (sin(st.x * 32. + sin(st.x*u_time*0.15)) + 0.25 * sin(st.y * 92.))));
  vec3 pct3 = vec3(abs(0.35 * (sin(st.y * st.x * 22.) + 0.45 * sin(st.x + st.y * 32.))));

  vec3 col = mix(col1, col2, step(0.6, abs(0.25*sin(pct1*12.)) + pct1 * pct2 + pct3));

  gl_FragColor = vec4(col, 1.);
}
