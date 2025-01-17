import type { Config } from "tailwindcss";
import { Background } from "tsparticles-engine";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Using global colors for better maintainability
      colors: {
        primary: "#f1f5f9",
        secondary: "#94a3b8",
        accent: "#3b82f6",
        border: "#64748b",
      },

      // Default animation spin speed for react icon is way too fast at sec
      keyframes: {
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
