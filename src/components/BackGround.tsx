import React from "react";
import { useEffect, useRef, useMemo } from "react";

const VERT = `
attribute vec2 a_position;
varying vec2 vUv;
void main(){
    vUv=a_position*.5+.5;
    gl_Position=vec4(a_position,0.,1.);
}`;

const FRAG = `
precision highp float;
varying vec2 vUv;
uniform float uTime,uSpeed;
uniform vec3 uColor1,uColor2,uColor3;

float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}

float noise(vec2 p){
    vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);
    return mix(
    mix(hash(i),hash(i+vec2(1,0)),u.x),
    mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),
    u.y
    );
}

float fbm(vec2 p){
    float v=0.,a=.5;
    for(int i=0;i<5;i++){v+=a*noise(p);p*=2.;a*=.5;}
    return v;
}

void main(){
    vec2 uv=vUv;
    float t=uTime*uSpeed;

    vec2 q=vec2(fbm(uv+t*.12),fbm(uv+vec2(1.7,9.2)+t*.1));
    vec2 r=vec2(fbm(uv+2.*q+vec2(.8,2.3)+t*.07),fbm(uv+2.*q+vec2(5.2,1.3)+t*.06));

    float f=fbm(uv+2.8*r);
    float m1=clamp(f*f*4.,0.,1.);
    float m2=clamp((f-.2)*.8,0.,1.);

    vec3 col=mix(uColor1,uColor2,m1);
    col=mix(col,uColor3,m2);

    float shine=pow(clamp(1.-length(r),0.,1.),3.)*.18;
    col+=shine*vec3(.4,.6,1.);

    float vign=1.-smoothstep(.45,.95,length(uv-.5)*1.5);
    col*=mix(.55,1.,vign);

    float grain=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)*.025;
    gl_FragColor=vec4(clamp(col-grain,0.,1.),1.);
}`;

const hexToVec3 = (hex: string): [number, number, number] => {
    hex = hex.replace("#", "");
    return [
        parseInt(hex.slice(0, 2), 16) / 255,
        parseInt(hex.slice(2, 4), 16) / 255,
        parseInt(hex.slice(4, 6), 16) / 255,
    ];
};

interface GLContext {
    gl: WebGLRenderingContext;
    prog: WebGLProgram;
    buf: WebGLBuffer;
    locs: {
        uTime: WebGLUniformLocation;
        uSpeed: WebGLUniformLocation;
        uColor1: WebGLUniformLocation;
        uColor2: WebGLUniformLocation;
        uColor3: WebGLUniformLocation;
    };
    colorsRef?: {
        c1: [number, number, number];
        c2: [number, number, number];
        c3: [number, number, number];
    };
    speedRef?: { value: number };
}

const buildProgram = (gl: WebGLRenderingContext): WebGLProgram => {
    const compile = (type: number, src: string): WebGLShader | null => {
        const s = gl.createShader(type);
        if (!s) return null;
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    const prog = gl.createProgram();
    if (!prog || !vs || !fs) throw new Error("Failed to create program");
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    return prog;
};

interface LiquidBackgroundProps {
    color1?: string;
    color2?: string;
    color3?: string;
    speed?: number;
    style?: React.CSSProperties;
}

export default function LiquidBackground({
    color1 = "#00032e",
    color2 = "#000000",
    color3 = "#001b4d",
    speed = 1.5,
    style = {},
}: LiquidBackgroundProps): React.ReactElement {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const glRef = useRef<GLContext | null>(null);

    const colorVecs = useMemo(
        () => ({
            c1: hexToVec3(color1),
            c2: hexToVec3(color2),
            c3: hexToVec3(color3),
        }),
        [color1, color2, color3],
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext("webgl", {
            alpha: false,
            antialias: false,
            powerPreference: "high-performance",
            preserveDrawingBuffer: false,
        }) as WebGLRenderingContext | null;
        if (!gl) return;

        const prog = buildProgram(gl);
        gl.useProgram(prog);

        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
            gl.STATIC_DRAW,
        );

        const posLoc = gl.getAttribLocation(prog, "a_position");
        gl.enableVertexAttribArray(posLoc);
        gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

        const locs = {
            uTime: gl.getUniformLocation(prog, "uTime") as WebGLUniformLocation,
            uSpeed: gl.getUniformLocation(prog, "uSpeed") as WebGLUniformLocation,
            uColor1: gl.getUniformLocation(prog, "uColor1") as WebGLUniformLocation,
            uColor2: gl.getUniformLocation(prog, "uColor2") as WebGLUniformLocation,
            uColor3: gl.getUniformLocation(prog, "uColor3") as WebGLUniformLocation,
        };

        glRef.current = { gl, prog, buf: buf as WebGLBuffer, locs };

        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        let pendingW = (canvas.clientWidth * dpr) | 0;
        let pendingH = (canvas.clientHeight * dpr) | 0;
        let pendingResize = false;

        canvas.width = pendingW;
        canvas.height = pendingH;
        gl.viewport(0, 0, pendingW, pendingH);

        const ro = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            pendingW = (width * dpr) | 0;
            pendingH = (height * dpr) | 0;
            pendingResize = true;
        });
        ro.observe(canvas);

        let time = 0,
            last = performance.now(),
            raf: number;
        const colorsRef = { c1: colorVecs.c1, c2: colorVecs.c2, c3: colorVecs.c3 };
        glRef.current.colorsRef = colorsRef;
        glRef.current.speedRef = { value: speed };

        const loop = (now: number): void => {
            raf = requestAnimationFrame(loop);

            if (pendingResize) {
                canvas.width = pendingW;
                canvas.height = pendingH;
                gl.viewport(0, 0, pendingW, pendingH);
                pendingResize = false;
            }

            time += ((now - last) / 1000) * 0.1;
            last = now;

            gl.uniform1f(locs.uTime, time);
            gl.uniform1f(locs.uSpeed, glRef.current?.speedRef?.value || speed);
            gl.uniform3fv(locs.uColor1, colorsRef.c1);
            gl.uniform3fv(locs.uColor2, colorsRef.c2);
            gl.uniform3fv(locs.uColor3, colorsRef.c3);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        };
        raf = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(raf);
            ro.disconnect();
            gl.deleteBuffer(buf);
            gl.deleteProgram(prog);
            glRef.current = null;
        };
    }, [colorVecs.c1, colorVecs.c2, colorVecs.c3, speed]);

    useEffect(() => {
        const state = glRef.current;
        if (!state || !state.colorsRef || !state.speedRef) return;
        state.colorsRef.c1 = colorVecs.c1;
        state.colorsRef.c2 = colorVecs.c2;
        state.colorsRef.c3 = colorVecs.c3;
        state.speedRef.value = speed;
    }, [colorVecs, speed]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                display: "block",
                zIndex: 0,
                pointerEvents: "none",
                ...style,
            }}
        />
    );
}