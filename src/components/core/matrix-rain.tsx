"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const glyphs =
      "アァカサタナハマヤラワ01{}[]<>#$%&*+=アイウエオ".split("");
    let cols: number;
    let drops: number[];

    function size() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      cols = Math.floor(canvas!.width / 14);
      drops = Array(cols)
        .fill(0)
        .map(() => Math.random() * -50);
    }

    size();
    window.addEventListener("resize", size);

    let animId: number;
    let lastTime = 0;
    const interval = 55; // ms between frames

    function draw(timestamp: number) {
      animId = requestAnimationFrame(draw);

      if (timestamp - lastTime < interval) return;
      lastTime = timestamp;

      ctx!.fillStyle = "rgba(10,10,10,0.08)";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
      ctx!.font = "13px JetBrains Mono, monospace";

      for (let i = 0; i < cols; i++) {
        const ch = glyphs[Math.floor(Math.random() * glyphs.length)];
        const x = i * 14;
        const y = drops[i] * 16;
        ctx!.fillStyle = Math.random() < 0.02 ? "#b6ffc4" : "#00ff41";
        ctx!.fillText(ch, x, y);
        if (y > canvas!.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", size);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="matrix-canvas"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.13]"
    />
  );
}
