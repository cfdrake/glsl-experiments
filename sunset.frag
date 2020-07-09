#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14196

uniform float u_time;
uniform vec2 u_resolution;

void main() {
    
    vec3 blue = vec3(0.3412, 0.3647, 0.5451);
    vec3 yel = vec3(0.9686, 0.8275, 0.4118);
    vec3 org = vec3(0.9059, 0.5804, 0.2314);
    vec3 red = vec3(0.6235, 0.2353, 0.1059);
    
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    
    vec3 color = mix(blue, yel, st.y);
    
    color = mix(color, org, (st.x + st.y) * 0.3);
    color = mix(color, red, st.x * 0.25);
    
    gl_FragColor = vec4(color, 1.);
}
