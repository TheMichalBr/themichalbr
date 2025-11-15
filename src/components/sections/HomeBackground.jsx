import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Color } from "three";
import { forwardRef, useRef, useMemo, useLayoutEffect, useState, useEffect } from "react";

const hexToNormalizedRGB = (hex) => {
    hex = hex.replace("#", "");
    return [
        parseInt(hex.slice(0, 2), 16) / 255,
        parseInt(hex.slice(2, 4), 16) / 255,
        parseInt(hex.slice(4, 6), 16) / 255,
    ];
};

const fragmentShader = `
varying vec2 vUv;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
	float G = e;
	vec2  r = (G * sin(G * texCoord));
	return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
	float c = cos(angle);
	float s = sin(angle);
	mat2  rot = mat2(c, -s, s, c);
	return rot * uv;
}

void main() {
	vec2  uv      = rotateUvs(vUv * uScale, uRotation);
	vec2  tex     = uv * uScale;
	float tOffset = uSpeed * uTime;

	tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

	float pattern = 0.6 +
		0.4 * sin(5.0 * (tex.x + tex.y +
			cos(3.0 * tex.x + 5.0 * tex.y) +
			0.02 * tOffset) +
		sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

	float rnd = noise(gl_FragCoord.xy) / 15.0 * uNoiseIntensity;
	vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd;
	col.a = 1.0;
	gl_FragColor = col;
}
`;

const vertexShader = `
varying vec2 vUv;

void main() {
	vUv = uv;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const SilkPlane = forwardRef(function SilkPlane({ uniforms }, ref) {
    const { viewport } = useThree();

    useLayoutEffect(() => {
        if (ref.current) {
            ref.current.scale.set(viewport.width, viewport.height, 1);
        }
    }, [ref, viewport]);

    useFrame((_, delta) => {
        if (ref.current?.material?.uniforms?.uTime) {
            ref.current.material.uniforms.uTime.value += 0.1 * delta;
        }
    });

    return (
        <mesh ref={ref}>
            <planeGeometry args={[1, 1, 1, 1]} />
            <shaderMaterial
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                transparent={false}
                depthWrite={false}
                depthTest={false}
            />
        </mesh>
    );
});
SilkPlane.displayName = "SilkPlane";

const getDeviceLevel = () => {
    if (typeof window === "undefined") return "high";

    const dpr = window.devicePixelRatio || 1;
    const memory = navigator.deviceMemory || 8;

    if (memory <= 2 || dpr < 1) return "low";
    if (memory <= 4 || dpr === 1) return "mid";
    return "high";
};

const getDprForDevice = () => {
    const level = getDeviceLevel();
    if (level === "low") return 0.75;
    if (level === "mid") return 1;
    return Math.min(window.devicePixelRatio || 1, 1.5);
};

const HomeBackGround = ({
    speed = 5,
    scale = 1,
    color = "#7B7481",
    noiseIntensity = 1.5,
    rotation = 0,
}) => {
    const meshRef = useRef();
    const [deviceLevel, setDeviceLevel] = useState("high");

    useEffect(() => {
        setDeviceLevel(getDeviceLevel());
    }, []);

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

    const glConfig = useMemo(() => {
        if (deviceLevel === "low") {
            return {
                antialias: false,
                alpha: true,
                powerPreference: "low-power",
                precision: "lowp",
            };
        }
        if (deviceLevel === "mid") {
            return {
                antialias: false,
                alpha: true,
                powerPreference: "high-performance",
                precision: "mediump",
            };
        }
        return {
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            precision: "highp",
        };
    }, [deviceLevel]);

    return (
        <Canvas
            dpr={getDprForDevice()}
            frameloop="always"
            gl={glConfig}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none",
            }}
        >
            <SilkPlane ref={meshRef} uniforms={uniforms} />
        </Canvas>
    );
};

export default HomeBackGround;