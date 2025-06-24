import { useEffect, useRef } from "react";

// Sushi recipe from the original Matrix code (EN)
const SUSHI_RECIPE = [
    "1. Place the rice in a bowl and wash with cold water.",
    "2. Repeat until water runs clear. Drain well.",
    "3. Add 330ml water, cover, bring to boil, simmer 10 mins.",
    "4. Remove from heat, let stand covered 10 mins.",
    "5. Mix vinegar, sugar, salt. Fold into rice. Cool.",
    "6. Place nori on bamboo mat, shiny side down.",
    "7. Spread rice over nori, leaving 1cm at top edge.",
    "8. Arrange fillings (fish, veg) in a line.",
    "9. Roll tightly using the mat. Seal edge with water.",
    "10. Slice with wet knife. Serve with soy, wasabi, ginger."
];

// Helper pro generování cyan-green hue
function getCyanGreenHue(t) {
    // t ∈ [0,1], 0 = green, 1 = cyan
    // Green: 120, Cyan: 180
    return 120 + 60 * t;
}

export function MatrixRainBackground() {
    const canvasRef = useRef(null);
    const animationRef = useRef();
    const cleanupRef = useRef({}); // pro správu timeoutů

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        // --- Nastavení ---
        let dpr = window.devicePixelRatio || 1;
        let fontSize = 18;
        let width = window.innerWidth;
        let height = window.innerHeight;
        let cols = 0;
        let rows = 0;
        let columnStates = [];
        let running = true;

        // Předzpracování textu
        const recipeLines = SUSHI_RECIPE.map(line => [...line]);
        const recipeRows = recipeLines.length;
        const maxLineLength = Math.max(...recipeLines.map(l => l.length));

        // Inicializace sloupců
        function setup() {
            dpr = window.devicePixelRatio || 1;
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = width + "px";
            canvas.style.height = height + "px";
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);

            fontSize = Math.max(14, Math.min(22, Math.floor(width / 80)));
            cols = Math.floor(width / fontSize);
            rows = Math.floor(height / fontSize);

            // Každý sloupec má vlastní stav
            columnStates = Array.from({ length: cols }).map((_, i) => {
                // Cyan/green gradient podle pozice sloupce
                const t = cols <= 1 ? 0 : i / (cols - 1);
                const hue = getCyanGreenHue(Math.pow(t, 0.7) * 0.7 + Math.random() * 0.3); // více cyan vpravo
                return {
                    lineIdx: i % recipeRows,
                    charIdx: Math.floor(Math.random() * maxLineLength),
                    y: Math.floor(Math.random() * rows),
                    speed: 0.9 + Math.random() * 0.7, // řádky za sekundu
                    lastUpdate: performance.now() - Math.random() * 1000,
                    hue,
                };
            });
        }

        // Debounce resize
        let resizeTimeout;
        function handleResize() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                setup();
            }, 80);
            cleanupRef.current.resizeTimeout = resizeTimeout;
        }

        window.addEventListener("resize", handleResize);
        setup();

        // --- Hlavní animace ---
        function draw(now) {
            if (!running) return;

            // Fade-out efekt přes průhledný černý obdélník (velmi efektivní)
            ctx.globalAlpha = 0.18;
            ctx.fillStyle = "#0a0f1a";
            ctx.fillRect(0, 0, width, height);
            ctx.globalAlpha = 1;

            ctx.font = `${fontSize}px monospace`;
            ctx.textBaseline = "top";

            for (let i = 0; i < cols; i++) {
                const col = columnStates[i];
                const line = recipeLines[col.lineIdx];
                // Výpočet, zda je čas posunout sloupec
                const elapsed = (now - col.lastUpdate) / 1000;
                if (elapsed > 1 / col.speed) {
                    col.y = (col.y + 1) % rows;
                    col.charIdx = (col.charIdx + 1) % line.length;
                    col.lastUpdate = now;
                }

                // Hlavní znak (glow, cyan/green)
                ctx.save();
                ctx.shadowColor = `hsl(${col.hue}, 100%, 75%)`;
                ctx.shadowBlur = 16;
                ctx.fillStyle = `hsl(${col.hue}, 100%, 80%)`;
                const char = line[col.charIdx] || " ";
                ctx.fillText(char, i * fontSize, col.y * fontSize);
                ctx.restore();

                // Trail (fade-out, cyan/green, jemný gradient)
                let trailLen = 10;
                for (let t = 1; t < trailLen; t++) {
                    const trailY = (col.y - t + rows) % rows;
                    const idx = (col.charIdx - t + line.length) % line.length;
                    const trailChar = line[idx] || " ";
                    // Trail barva: více cyan na začátku, více green na konci
                    const trailHue = col.hue + (180 - col.hue) * (t / trailLen) * 0.5;
                    const alpha = 0.14 * (1 - t / trailLen);
                    ctx.fillStyle = `hsl(${trailHue}, 100%, 60%, ${alpha})`;
                    ctx.fillText(trailChar, i * fontSize, trailY * fontSize);
                }
            }

            animationRef.current = requestAnimationFrame(draw);
        }

        running = true;
        animationRef.current = requestAnimationFrame(draw);

        // Okamžitý redraw po resize
        function forceRedraw() {
            running = false;
            cancelAnimationFrame(animationRef.current);
            setup();
            running = true;
            animationRef.current = requestAnimationFrame(draw);
        }

        window.addEventListener("resize", forceRedraw);

        // --- CLEANUP ---
        return () => {
            running = false;
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("resize", forceRedraw);
            cancelAnimationFrame(animationRef.current);
            if (cleanupRef.current.resizeTimeout) clearTimeout(cleanupRef.current.resizeTimeout);
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
                opacity: 0.7,
                background: "linear-gradient(180deg, #0a0f1a 0%, #0a1a1f 100%)",
                transition: "opacity 0.5s",
                filter: "contrast(1.15) brightness(1.05)",
                willChange: "opacity",
            }}
            aria-hidden="true"
        />
    );
}