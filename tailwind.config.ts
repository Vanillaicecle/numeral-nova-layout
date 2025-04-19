
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
      'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    screens: {
      'xl': '1920px',
      'lg': '1440px',
      'md': '768px',
      'sm': '480px'
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: '#33C3F0',
          light: '#D3E4FD'
        },
        faded: "#F5F7FA",
      },
      boxShadow: {
        'soft': '0 4px 24px 0 rgba(40, 60, 90, 0.08)',
      },
      borderRadius: {
        "xl": "1.5rem",
      },
      fontSize: {
        'metric-desktop': ['72px', '1.1'],
        'metric-mobile': ['48px', '1.15'],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s cubic-bezier(0.25,0.1,0.25,1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
