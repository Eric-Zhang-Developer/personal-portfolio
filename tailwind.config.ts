import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "terminal-bg": "#0a0a0a",
        "terminal-bg-2": "#0a0f0a",
        matrix: "#00ff41",
        "matrix-dim": "#008f11",
        "matrix-dark": "#00490a",
        "matrix-text": "#b6ffc4",
        amber: "#ffb000",
        danger: "#ff3b3b",
      },
      fontFamily: {
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      keyframes: {
        blink: {
          "50%": { opacity: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-20vh)" },
          "100%": { transform: "translateY(120vh)" },
        },
        flicker: {
          "0%, 100%": { opacity: "0.9" },
          "10%": { opacity: "0.85" },
          "20%": { opacity: "1" },
          "35%": { opacity: "0.78" },
          "50%": { opacity: "0.95" },
          "70%": { opacity: "0.82" },
          "85%": { opacity: "1" },
        },
        glitch: {
          "0%": {
            textShadow: "2px 0 #ff00c8, -2px 0 #00ffe0, 0 0 8px rgba(0,255,65,0.55)",
            transform: "translate(0,0)",
          },
          "25%": {
            textShadow: "-3px 0 #ff00c8, 3px 0 #00ffe0",
            transform: "translate(1px,-1px)",
          },
          "50%": {
            textShadow: "2px 0 #ff00c8, -2px 0 #00ffe0",
            transform: "translate(-1px,1px)",
          },
          "75%": {
            textShadow: "-2px 0 #ff00c8, 2px 0 #00ffe0",
            transform: "translate(1px,0)",
          },
          "100%": {
            textShadow: "0 0 8px rgba(0,255,65,0.55)",
          },
        },
      },
      animation: {
        blink: "blink 1s steps(2) infinite",
        scan: "scan 7s linear infinite",
        flicker: "flicker 3.2s infinite steps(8)",
        glitch: "glitch 0.35s steps(2) 1",
      },
    },
  },
  plugins: [],
};

export default config;
