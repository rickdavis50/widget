import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#FBFBFB",
        sub: "#9D9D9D",
        line: "#272727",
      },
      fontFamily: {
        serif: ["\"Instrument Serif\"", "serif"],
        sans: ["\"Inter\"", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
