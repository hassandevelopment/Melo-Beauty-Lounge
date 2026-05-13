import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:         "#E5D5C8",
          "bg-soft":  "#EFE3D8",
          pink:       "#EBC4BD",
          "pink-deep":"#D4A8A0",
          ink:        "#1A1A1A",
          "ink-soft": "#3A3A3A",
          cream:      "#F5EDE5",
          white:      "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["Sansation", "system-ui", "sans-serif"],
        body:    ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
      letterSpacing: {
        display: "0.12em",
      },
    },
  },
  plugins: [],
};
export default config;
