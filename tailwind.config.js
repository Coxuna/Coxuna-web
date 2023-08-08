/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Inter', 'sans-serif'],
        "work-sans": ['Work Sans', 'sans-serif'],
        "clash-display": ['Clash Display', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

