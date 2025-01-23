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
        "primary":        "rgb(var(--primary))",
        "background":     "rgb(var(--background))",
        "on-background":  "rgb(var(--on-background))",
        "on-primary":     "rgb(var(--on-primary))"
      }
    },
  },
  plugins: [],
}

