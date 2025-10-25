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
        background: "var(--background)",
        foreground: "var(--foreground)",
        gg: {
          'dark-blue': '#051731',
          gold: '#A08E62',
          white: '#f8fbfa',
          black: '#07080A',
          blue: '#010165',
          gray: '#0e1116',
        },
      },
    },
  },
  plugins: [],
};
export default config;
