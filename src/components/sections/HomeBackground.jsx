import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Color, PlaneGeometry } from "three";
import { forwardRef, useRef, useMemo, useLayoutEffect, useEffect } from "react";

const hexToNormalizedRGB = (hex) => {
    try {
        const value = parseInt(hex.slice(1), 16);
        return [
            ((value >> 16) & 255) / 255,
            ((value >> 8) & 255) / 255,
            (value & 255) / 255,
        ];
        // eslint-disable-next-line no-unused-vars
    } catch (e) {
        console.warn("Invalid hex color:", hex);
        return [0, 0, 0];
    }
};

const vertexShader = `
precision highp float;
varying vec2 vUv;
varying vec3 vPosition;

void main() {
    vPosition = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

#define E 2.71828182845904523536
#define PI 3.14159265359

float noise(vec2 texCoord) {
    vec2 r = (E * sin(E * texCoord));
    return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
    float c = cos(angle);
    float s = sin(angle);
    return mat2(c, -s, s, c) * uv;
}

void main() {
    float rnd = noise(gl_FragCoord.xy);
    vec2  uv = rotateUvs(vUv * uScale, uRotation);
    float tOffset = uSpeed * uTime;

    vec2 tex = uv * uScale;
    float wave = 0.03 * sin(8.0 * tex.x - tOffset);
    tex.y += wave;

    float pattern = 0.6 + 0.4 * sin(
        5.0 * (tex.x + tex.y + cos(3.0 * tex.x + 5.0 * tex.y) + 0.02 * tOffset) +
        sin(20.0 * (tex.x + tex.y - 0.1 * tOffset))
    );

    vec3 finalColor = uColor * pattern - (rnd / 15.0 * uNoiseIntensity);
    finalColor = pow(finalColor, vec3(0.9));
    gl_FragColor = vec4(finalColor, 1.0);
}
`;

const SilkPlane = forwardRef(function SilkPlane({ uniforms }, ref) {
    const { viewport } = useThree();
    const isActive = useRef(true);
    const lastTime = useRef(0);

    useEffect(() => {
        return () => {
            isActive.current = false;
        };
    }, []);

    useLayoutEffect(() => {
        if (ref.current && isActive.current) {
            ref.current.scale.set(viewport.width, viewport.height, 1);
        }
    }, [ref, viewport]);

    useFrame((_, delta) => {
        if (!isActive.current || !ref.current?.material?.uniforms) return;

        const targetDelta = Math.min(delta, 0.016667);
        const smoothDelta = lastTime.current * 0.9 + targetDelta * 0.1;
        lastTime.current = smoothDelta;

        ref.current.material.uniforms.uTime.value += smoothDelta * 0.5;
    });

    const geometry = useMemo(() => new PlaneGeometry(1, 1, 1, 1), []);

    return (
        <mesh ref={ref}>
            <primitive object={geometry} attach="geometry" />
            <shaderMaterial
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                transparent={false}
                depthTest={false}
                depthWrite={false}
            />
        </mesh>
    );
});

const HomeBackGround = ({
    speed = 5,
    scale = 1,
    color = "#7B7481",
    noiseIntensity = 1.5,
    rotation = 0,
}) => {
    const meshRef = useRef();

    const uniforms = useMemo(
        () => ({
            uSpeed: { value: speed },
            uScale: { value: scale },
            uNoiseIntensity: { value: noiseIntensity },
            uColor: { value: new Color(...hexToNormalizedRGB(color)) },
            uRotation: { value: rotation },
            uTime: { value: 0 },
        }),
        [speed, scale, noiseIntensity, color, rotation]
    );

    return (
        <Canvas
            dpr={Math.min(window.devicePixelRatio, 2)}
            frameloop="always"
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none",
                willChange: "transform",
                WebkitBackfaceVisibility: "hidden",
                MozBackfaceVisibility: "hidden",
            }}
            gl={{
                antialias: false,
                alpha: false,
                powerPreference: "high-performance",
                stencil: false,
                depth: false,
                failIfMajorPerformanceCaveat: true,
            }}
        >
            <SilkPlane ref={meshRef} uniforms={uniforms} />
        </Canvas>
    );
};

export default HomeBackGround;