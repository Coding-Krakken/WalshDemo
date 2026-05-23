import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        matte: "#0b0b0b",
        coal: "#141414",
        steel: "#1f242b",
        hazard: "#f5b400",
        chalk: "#f5f5f5"
      },
      fontFamily: {
        heading: ["var(--font-bebas)", "Impact", "sans-serif"],
        body: ["var(--font-barlow)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 24px rgba(245, 180, 0, 0.45)",
        card: "0 10px 35px rgba(0, 0, 0, 0.35)"
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        shine: "shine 3.2s linear infinite",
        float: "float 4s ease-in-out infinite"
      },
      backgroundImage: {
        "industrial-gradient": "radial-gradient(circle at 20% 10%, rgba(245,180,0,0.12), transparent 35%), linear-gradient(120deg, #070707 0%, #10141d 45%, #0b0b0b 100%)"
      }
    }
  },
  plugins: []
};

export default config;