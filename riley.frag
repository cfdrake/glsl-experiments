#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(void) {
  vec2 sto = gl_FragCoord.xy / u_resolution.xy;
  vec2 st = gl_FragCoord.xy / u_resolution.xy;

  st *= 4.0;
  st = fract(st);
  st.x -= sin(u_time / 4.5);
  st.y -= sin(u_time / 5.);

  float c = mod(0.999,distance(vec2(sin(sto.x*8. + u_time / 3.)), sin(sto.y * 0.004 * u_time + u_time)+st));
  vec3 col = vec3(c*distance(st,vec2(sin(u_time / 2.))));

  col = mix(vec3(1.,0.5+abs(0.5*sin(sto.y*4. + u_time / 1.5)),0.),vec3(0.),col.x);

  gl_FragColor = vec4(col, 1.);
}
