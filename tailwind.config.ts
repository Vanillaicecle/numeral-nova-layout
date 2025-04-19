
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      roboto: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    screens: {
      xl: "1920px",
      lg: "1440px",
      md: "768px",
      sm: "480px"
    },
    extend: {
      colors: {
        accent: "#2563EB",
        "main-gray": "#333333",
        "secondary-gray": "#666666",
        "border-gray": "#DDDDDD",
        "block-blue": "#F0F9FF",
        "block-green": "#D1FAE5",
        "green-dark": "#065F46",
      },
      boxShadow: {
        soft: "0 2px 8px 0 rgba(0,0,0,0.05)",
      },
      borderRadius: {
        "lg": "12px",
        "circle": "1000px",
      },
      fontSize: {
        metricDesktop: ["72px", "1.1"],
        metricMobile: ["48px", "1.15"],
        accentDesktop: ["64px", "1.1"],
        accentMobile: ["40px", "1.15"],
        groupMetric: ["36px", "1.15"],
        groupLabel: ["16px", "1.25"],
      },
      spacing: {
        blockGapDesktop: "60px",
        blockGapMobile: "30px",
      },
      maxWidth: {
        content: "1200px",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
