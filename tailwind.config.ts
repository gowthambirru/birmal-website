import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: {
            DEFAULT: "#063B38",
            dark: "#053330",
            deep: "#042624",
            light: "#0A4E4A",
            border: "#0E5E5A",
          },
          green: {
            DEFAULT: "#0FA942",
            dark: "#0D8F38",
            light: "#16A34A",
            bright: "#22C55E",
            surface: "#E8F7EE",
          },
          topbar: "#102424",
          surface: {
            DEFAULT: "#FFFFFF",
            mint: "#F4F7F6",
            subtle: "#EBF2F0",
          },
          text: {
            primary: "#0F172A",
            secondary: "#475569",
            muted: "#64748B",
            inverse: "#FFFFFF",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(6, 59, 56, 0.08)",
        "card-hover": "0 20px 40px -5px rgba(6, 59, 56, 0.15)",
        pill: "0 4px 15px rgba(15, 169, 66, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
