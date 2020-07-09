#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14196

uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec3 red = vec3(1., 0., 0.);
    vec3 green = vec3(0., 1.0, 0.);
    vec3 blue = vec3(0., 0., 1.);
    
    vec2 st = gl_FragCoord.xy / u_resolution.xy;

    vec3 color;
    
    color = mix(red, green, vec3(step(0.33, st.x)));
    color = mix(color, blue, vec3(step(0.66, st.x)));
    
    gl_FragColor = vec4(color, 1.);
}
