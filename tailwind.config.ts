import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "hero-pattern": "url('/email-bg.avif')",
      },
      animation: {
        "fade-in": "fadeIn 1s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { background: "#33ff0040" },
          "100%": { background: "#33ff0020" },
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
