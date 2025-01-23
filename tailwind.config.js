/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "primary":        "rgba(var(--primary))",
        "background":     "rgba(var(--background))",
        "on-background":  "rgba(var(--on-background))",
        "on-primary":     "rgba(var(--on-primary))"
      }
    },
  },
  plugins: [],
}

