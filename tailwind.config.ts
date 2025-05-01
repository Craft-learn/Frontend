import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        fontPrimary: "#2D2D2D",
        fontSec: "#575757",
        yellow: "#FFD700",
        black: "#1A1203",
        blackyel:
          "linear-gradient(93.09deg, #333333 25.41%, #FFD700 100.15%)"
      },
      backgroundColor: {
        primary: "#F9F9F7",

      },
      fontFamily: {
        chivo: ["Chivo", "sans-serif"],
        dmsans: ["DM Sans", "serif"],
        rajdhani: ["Rajdhani", "serif"]
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 1s ease-out forwards",
        slideInRight: "slideInRight 1s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
