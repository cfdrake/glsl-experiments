#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    float pct = smoothstep(0.25, 0.3, st.x) * smoothstep(0.25, 0.3, 1. - st.x)
              * smoothstep(0.0, 0.3, st.y) * smoothstep(0.0, 0.3, 1. - st.y);

    color = vec3(pct) * vec3(st.x, st.y, st.x + st.y);

    gl_FragColor = vec4(color,1.0);
}
