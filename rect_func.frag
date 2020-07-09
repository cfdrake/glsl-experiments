#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 rect(in vec2 st, in float bst, in float bend) {
    float pct = smoothstep(bst, bend, st.x) * smoothstep(bst, bend, 1. - st.x)
              * smoothstep(bst, bend, st.y) * smoothstep(bst, bend, 1. - st.y);

    vec3 color = vec3(pct) * vec3(st.x, st.y, st.x + st.y);
    
    return color;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = rect(st, 0.1, 0.2);

    gl_FragColor = vec4(color,1.0);
}
