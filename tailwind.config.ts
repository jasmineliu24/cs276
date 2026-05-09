import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0e1b2c",
        paper: "#f5f1e8",
        "paper-deep": "#ebe5d5",
        rule: "#c8bfa8",
        terracotta: "#b5483d",
        "warm-gray": "#6b6557",
        "soft-gray": "#8e8674"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Newsreader", "Georgia", "serif"],
        sans: ["var(--font-body)", "IBM Plex Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "ui-monospace", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
