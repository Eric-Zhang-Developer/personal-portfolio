import type { Config } from "tailwindcss";

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
        primary: '#1e293b',
        secondary: '#334155',
        accent: '#3b82f6',
      }
    },
  },
  plugins: [],
};

export default config;