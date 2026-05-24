import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        navy: {
          950: "#050B18",
          900: "#070F24",
          800: "#0A1633",
          700: "#0E214A",
          600: "#143064",
          500: "#1B4080",
        },
        sky: {
          wash: "#EAF6FF",
          light: "#BAE6FD",
        },
        peach: {
          DEFAULT: "#FFE9DA",
          light: "#FFF4EE",
        },
        sunset: {
          DEFAULT: "#FF7A3D",
          light: "#FF9F6B",
          dark: "#E55A1C",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        glow: "0 1px 2px rgba(15,23,42,0.05), 0 6px 20px rgba(15,23,42,0.08)",
        card: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.07)",
        glass: "0 2px 4px rgba(15,23,42,0.04), 0 12px 32px rgba(15,23,42,0.08)",
        premium: "0 4px 6px rgba(15,23,42,0.04), 0 20px 40px rgba(15,23,42,0.10)",
        "navbar": "0 1px 2px rgba(15,23,42,0.04), 0 8px 32px rgba(15,23,42,0.10)",
      },
      backgroundImage: {
        "hero-grid": "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.12), transparent 40%), radial-gradient(circle at 80% 0%, rgba(88,160,255,0.12), transparent 35%)",
        "noise": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.25'/%3E%3C/svg%3E\")",
        "sunset-gradient": "linear-gradient(135deg, #FF7A3D 0%, #FF9F6B 100%)",
        "navy-gradient": "linear-gradient(135deg, #070F24 0%, #0E214A 100%)",
        "sky-gradient": "linear-gradient(135deg, #EAF6FF 0%, #BAE6FD 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shine: {
          "0%": { transform: "translateX(-120%) skewX(-12deg)" },
          "100%": { transform: "translateX(260%) skewX(-12deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        // Cinematic / premium additions
        "pulse-ring": {
          "0%":   { transform: "scale(1)",   opacity: "0.65" },
          "100%": { transform: "scale(2.4)", opacity: "0"    },
        },
        "shimmer-sweep": {
          "0%":   { transform: "translateX(-110%) skewX(-12deg)" },
          "100%": { transform: "translateX(260%) skewX(-12deg)"  },
        },
        "counter-up": {
          "0%":   { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255, 122, 61, 0)" },
          "50%":      { boxShadow: "0 0 24px 4px rgba(255, 122, 61, 0.18)" },
        },
      },
      animation: {
        float:           "float 6s ease-in-out infinite",
        shine:           "shine 1.25s ease-in-out",
        "fade-up":       "fade-up 0.5s ease-out forwards",
        "scale-in":      "scale-in 0.4s ease-out forwards",
        marquee:         "marquee 30s linear infinite",
        "pulse-ring":    "pulse-ring 1.8s cubic-bezier(0.19,1,0.22,1) infinite",
        "shimmer-sweep": "shimmer-sweep 0.7s ease-out",
        "counter-up":    "counter-up 0.45s ease-out forwards",
        "glow-pulse":    "glow-pulse 2.5s ease-in-out infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};

export default config;
