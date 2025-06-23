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

export function MatrixRainBackground() {
    const canvasRef = useRef(null);
    const animationRef = useRef();
    const columnsRef = useRef([]);
    const settingsRef = useRef({});

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let dpr = window.devicePixelRatio || 1;
        let fontSize = 20;
        let width = window.innerWidth;
        let height = window.innerHeight;

        // Připravíme znaky receptu
        const recipeLines = SUSHI_RECIPE.map(line => [...line]);
        const maxLineLength = Math.max(...recipeLines.map(l => l.length));
        const recipeRows = recipeLines.length;

        // Nastavení pro resize a sloupce
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

            // Počet sloupců podle šířky a fontu
            const cols = Math.floor(width / fontSize);
            // Každý sloupec má vlastní stav
            columnsRef.current = Array.from({ length: cols }).map((_, i) => ({
                // Každý sloupec je mapován na řádek receptu (cyklicky)
                lineIdx: i % recipeRows,
                charIdx: Math.floor(Math.random() * maxLineLength),
                y: Math.random() * -20,
                speed: 0.18 + Math.random() * 0.15,
                trail: 10 + Math.floor(Math.random() * 10),
                hue: 120 + Math.random() * 60,
            }));
            settingsRef.current = { cols, fontSize, width, height, recipeLines, maxLineLength, recipeRows };
        }

        // Debounce resize
        let resizeTimeout;
        function handleResize() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                setup();
            }, 100);
        }

        window.addEventListener("resize", handleResize);
        setup();

        function draw() {
            const { cols, fontSize, width, height, recipeLines, maxLineLength, recipeRows } = settingsRef.current;
            // Fade-out s gradientem
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, "rgba(10,20,30,0.18)");
            gradient.addColorStop(1, "rgba(10,26,40,0.22)");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            ctx.font = `${fontSize}px monospace`;
            ctx.textBaseline = "top";

            for (let i = 0; i < columnsRef.current.length; i++) {
                const col = columnsRef.current[i];
                const line = recipeLines[col.lineIdx];
                // Glow pro hlavní znak
                ctx.shadowColor = `hsl(${col.hue}, 100%, 65%)`;
                ctx.shadowBlur = 10;

                // Hlavní znak
                let char = line[col.charIdx % line.length] || " ";
                ctx.fillStyle = `hsl(${col.hue}, 100%, 70%)`;
                ctx.fillText(char, i * fontSize, col.y * fontSize);

                // Trail
                ctx.shadowBlur = 0;
                let trailCharIdx = col.charIdx;
                for (let t = 1; t < col.trail; t++) {
                    const fade = 1 - t / col.trail;
                    const alpha = 0.13 * fade;
                    const trailHue = col.hue + t * 2;
                    trailCharIdx = (trailCharIdx - 1 + line.length) % line.length;
                    const trailChar = line[trailCharIdx] || " ";
                    ctx.fillStyle = `hsl(${trailHue}, 100%, 60%, ${alpha})`;
                    ctx.fillText(trailChar, i * fontSize, (col.y - t) * fontSize);
                }

                // Posun sloupce
                col.y += col.speed;
                if (col.y * fontSize > height + col.trail * fontSize) {
                    col.y = Math.random() * -20;
                    col.speed = 0.18 + Math.random() * 0.15;
                    col.trail = 10 + Math.floor(Math.random() * 10);
                    col.hue = 120 + Math.random() * 60;
                    // posuneme se na další znak v řádku
                    col.charIdx = (col.charIdx + 1) % line.length;
                }
            }

            animationRef.current = requestAnimationFrame(draw);
        }

        animationRef.current = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationRef.current);
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
            }}
            aria-hidden="true"
        />
    );
}