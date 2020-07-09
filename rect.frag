#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    float pct = step(0.3, st.x) * step(0.3, 1. - st.x)
              * step(0.1, st.y) * step(0.1, 1. - st.y);

    color = vec3(pct);

    gl_FragColor = vec4(color,1.0);
}
