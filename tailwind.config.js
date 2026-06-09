/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc",
          400: "#818cf8", 500: "#4f46e5", 600: "#2563eb", 700: "#4338ca",
          800: "#3730a3", 900: "#312e81",
        },
        cyan: { 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2" },
        violet: { 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed" },
        teal: { 400: "#2dd4bf", 500: "#14b8a6" },
        navy: { 900: "#0b1120", 800: "#0f172a", 700: "#1e293b" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-30px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
        shimmer: { "100%": { transform: "translateX(100%)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        gridmove: { "0%": { backgroundPosition: "0 0" }, "100%": { backgroundPosition: "40px 40px" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blob: "blob 14s ease-in-out infinite",
        marquee: "marquee 26s linear infinite",
        gridmove: "gridmove 3s linear infinite",
      },
      backgroundImage: {
        "grid-light": "linear-gradient(to right, rgba(15,23,42,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.05) 1px, transparent 1px)",
        "grid-dark": "linear-gradient(to right, rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
