#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14196

uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec3 c1 = vec3(0.);
    c1.g = 0.8;
    c1.b = 1.;
    
    vec3 c2 = vec3(0.);
    c2.g = 0.2;
    c2.r = 1.;
    
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 pct = vec3(0.);
    pct.r = smoothstep(0.0, 1., st.x);
    pct.g = sqrt(st.x);
    pct.b = sin(st.x * PI);
    
    vec3 color = mix(c1, c2, pct);
    
    gl_FragColor = vec4(color, 1.);
}
