import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        mona: ["var(--font-mona)", "sans-serif"],
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
      colors: {
        border: "var(--color-border)",
        input: "var(--input)",
        ring: "var(--color-accent)",
        background: "var(--color-bg)",
        foreground: "var(--color-text)",
        surface: "var(--color-bg-surface)",
        card: {
          DEFAULT: "var(--color-bg-card)",
          foreground: "var(--color-text)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-text)",
        },
        primary: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-text)",
        },
        secondary: {
          DEFAULT: "var(--color-bg-surface)",
          foreground: "var(--color-text)",
        },
        muted: {
          DEFAULT: "var(--color-bg-surface)",
          foreground: "var(--color-text-muted)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        popover: {
          DEFAULT: "var(--color-bg-card)",
          foreground: "var(--color-text)",
        },
      },
      borderRadius: {
        lg: "6px",
        md: "4px",
        sm: "2px",
      },
      maxWidth: {
        content: "1100px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
