import { useEffect, useRef } from "react";

export function HomeBackGround() {
  const canvasRef = useRef(null);
  const opacityRef = useRef(0);
  const targetOpacity = 0.9;

  useEffect(() => {
    let dpr, width, height, center, particles, anim;
    const blueColors = [
      [210, 60, 28],
      [220, 50, 22],
      [200, 40, 24],
      [215, 35, 18],
      [225, 55, 16],
      [205, 30, 20],
      [230, 45, 20],
    ];

    const setup = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      center = { x: width / 2, y: height / 2 };
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      particles = [];
      const rings = 4;
      for (let r = 1; r <= rings; r++) {
        const count = 8 + r * 4;
        for (let i = 0; i < count; i++) {
          const [h, s, l] = blueColors[Math.floor(Math.random() * blueColors.length)];
          particles.push({
            baseRadius: 80 + r * (Math.min(width, height) / 7),
            angle: (i / count) * Math.PI * 2,
            speed: 0.12 + r * 0.04 + Math.random() * 0.04,
            size: 4 + r * 1.2 + Math.random() * 1.5,
            color: `hsl(${h}, ${s}%, ${l}%)`,
            shadow: `hsl(${h}, ${s}%, ${Math.min(l + 10, 40)}%)`,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    let lastTs = 0;
    const fadeSpeed = 0.002;

    const draw = (ts) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, width, height);

      if (!lastTs) lastTs = ts;
      const dt = ts - lastTs;
      lastTs = ts;
      const shouldShow = document.visibilityState === "visible";
      const target = shouldShow ? targetOpacity : 0;
      opacityRef.current += (target - opacityRef.current) * Math.min(1, fadeSpeed * dt);
      if (canvas.style.opacity !== opacityRef.current.toFixed(2)) {
        canvas.style.opacity = opacityRef.current.toFixed(2);
      }

      ctx.save();
      const grad = ctx.createRadialGradient(
        center.x, center.y, 0,
        center.x, center.y, Math.min(width, height) * 0.4
      );
      grad.addColorStop(0, "rgba(30,40,80,0.13)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      ctx.arc(center.x, center.y, Math.min(width, height) * 0.4, 0, 2 * Math.PI);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();

      for (const p of particles) {
        const angle = p.angle + ts * 0.00018 * p.speed;
        const pulse = 0.7 + 0.3 * Math.sin(ts * 0.001 * p.speed + p.phase);
        const x = center.x + Math.cos(angle) * p.baseRadius;
        const y = center.y + Math.sin(angle) * p.baseRadius;

        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, p.size * pulse, 0, 2 * Math.PI);
        ctx.shadowColor = p.shadow;
        ctx.shadowBlur = 18 + 8 * pulse;
        ctx.globalAlpha = 0.82 * pulse;
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
      }

      anim = requestAnimationFrame(draw);
    };

    setup();
    window.addEventListener("resize", setup);
    anim = requestAnimationFrame(draw);

    const handleVisibility = () => {
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("resize", setup);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(anim);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0,
        background: "transparent",
        transition: "none",
        filter: "contrast(1.1) brightness(1.1)",
        willChange: "opacity",
      }}
      aria-hidden="true"
    />
  );
}