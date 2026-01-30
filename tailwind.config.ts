import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background_primary: "#FFFFFF",
        background_secondary: "#F0F9FF",
        text_primary: "#0F172A",
        text_secondary: "#475569",
        accent_main: "#2563EB",
        accent_hover: "#1D4ED8",
        border_color: "#E2E8F0",
      },
      fontFamily: {
        heading: ["var(--font-cairo)", "sans-serif"],
        body: ["var(--font-ibm-plex-sans-arabic)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
