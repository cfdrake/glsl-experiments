#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14196

uniform float u_time;
uniform vec2 u_resolution;

void main() {
    
    vec3 blue = vec3(0.3412, 0.3647, 0.5451);
    vec3 yel = vec3(0.9686, 0.8275, 0.4118);
    
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    
    vec3 color = mix(blue, yel, st.y + 0.5 * abs(sin(u_time * 0.5)));
    
    gl_FragColor = vec4(color, 1.);
}
