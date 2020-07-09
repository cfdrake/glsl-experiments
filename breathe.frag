#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    
    vec3 sunrise = vec3(0.312, 0.006, 0.655);
    vec3 sunset = vec3(0.114, 0.794, 0.995);
    
    vec3 color;
    
    float time = u_time / 2.;
    float threshold = 0.2 + abs(sin(u_time / 2.)) * 0.04;
    
    if (st.x > threshold && st.x < 1. - threshold &&
        st.y > threshold && st.y < 1. - threshold) {
	      color = mix(sunrise, sunset, sin(time + st.y));
    } else {
        color = vec3(1.);
    }
    
    gl_FragColor = vec4(color, 1.);
}
