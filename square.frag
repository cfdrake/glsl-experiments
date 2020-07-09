#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color = vec3(0.);
    
    vec2 borders = step(vec2(0.1), st);
    float pct = borders.x * borders.y;
    
    borders = step(vec2(0.1), 1. - st);
    pct = pct * borders.x * borders.y;
    
    color = vec3(pct);
    
    gl_FragColor = vec4(color, 1.);
}
