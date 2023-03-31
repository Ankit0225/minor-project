/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "navbar": "#475569",
        "navbar-focus": "#f9fafb"
      }
    },
  },
  plugins: [],
}