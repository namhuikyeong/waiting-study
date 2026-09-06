import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0F1B33",
          900: "#16233F",
          800: "#1E2E4F",
          700: "#2A3F63",
        },
        gold: {
          500: "#C89B3C",
          400: "#D6AF5C",
          100: "#F4E9D2",
        },
        paper: "#FAF9F6",
        mist: "#EEF1F6",
        coral: {
          500: "#E0563F",
        },
        jade: {
          500: "#2F8F7A",
        },
        sky: {
          500: "#3B7DDE",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "6px",
      },
    },
  },
  plugins: [],
};
export default config;
