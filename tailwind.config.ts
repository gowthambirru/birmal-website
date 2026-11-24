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
            deep: "#032422",
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
          topbar: "#0B2220",
          surface: {
            DEFAULT: "#FFFFFF",
            mint: "#F5F9F7",
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
        card: "0 10px 30px -8px rgba(6, 59, 56, 0.08), 0 1px 3px rgba(6, 59, 56, 0.04)",
        "card-hover": "0 22px 44px -12px rgba(6, 59, 56, 0.16), 0 4px 10px rgba(6, 59, 56, 0.06)",
        editorial: "0 24px 60px -15px rgba(3, 36, 34, 0.18)",
        pill: "0 6px 20px -2px rgba(15, 169, 66, 0.35)",
        "pill-hover": "0 10px 26px -2px rgba(15, 169, 66, 0.48)",
      },
    },
  },
  plugins: [],
};
export default config;
