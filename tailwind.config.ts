import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50:  "#fdf3e7",
          100: "#fae0c0",
          200: "#f5c07a",
          300: "#ee9a35",
          400: "#d4711a",  // primary — matches logo's deep burnt orange
          500: "#b85a0e",  // darker hover state
          600: "#9a4509",
          700: "#7a3306",
          800: "#572204",
          900: "#331402",
        },
        navy: {
          500: "#1a2a6c",  // logo's dark blue text color
          600: "#142058",
          700: "#0e1640",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
