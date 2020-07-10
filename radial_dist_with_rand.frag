#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float random (vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  vec2 center = vec2(.5);

  float dist = distance(center, st - vec2(0., 0.15));

  vec3 color1 = vec3(1.25*dist + 0.1*random(st)) * vec3(0.8784313725, 0.7333333333, 0.2901960784);
  vec3 color2 = vec3(1.*dist + 0.1*random(st)) * vec3(0.8784313725, 0.1137254902, 0.2431372549);
  vec3 color3 = mix(color1, color2, step(0.25, dist));
  vec3 color = mix(color3, vec3(0.), 1. - (2.*st.y));
  gl_FragColor = vec4(color, 1.);
}
