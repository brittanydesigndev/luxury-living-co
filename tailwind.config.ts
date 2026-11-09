import type { Config } from "tailwindcss";

// Luxury Living Co. design system. Every color is a CSS variable defined in
// src/index.css so light and dark themes come from one place.
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: v("midnight-navy"),
        gold: v("antique-gold"),
        parchment: v("parchment"),
        stone: v("stone"),
        olive: v("olive"),
        bordeaux: v("bordeaux"),
        surface: v("surface"),
        raised: v("surface-raised"),
        sunken: v("surface-sunken"),
        ink: v("ink"),
        muted: v("ink-muted"),
        line: v("border"),
        "line-strong": v("border-strong"),
        accent: v("accent"),
        link: v("link"),
        primary: v("primary"),
        "on-primary": v("on-primary"),
        success: v("success"),
        caution: v("caution"),
        connect: v("stage-connect"),
        discover: v("stage-discover"),
        showcase: v("stage-showcase"),
        commit: v("stage-commit"),
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Times New Roman"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "-apple-system", '"Segoe UI"', "sans-serif"],
      },
      borderRadius: { sm: "4px", md: "8px", lg: "16px" },
      boxShadow: {
        soft: "0 1px 2px rgb(11 31 43 / 0.06), 0 10px 30px rgb(11 31 43 / 0.08)",
      },
      maxWidth: { page: "1120px", prose: "38rem" },
    },
  },
  plugins: [],
} satisfies Config;
