/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D2123",
        alt: "#1A1E1F",
        trans: "rgba(255, 255, 255, 0.25)",
        light: "#EFEEE0",
        blueish: "#609EAF",
        secondary: "#FACD66"
      }, 

      fontFamily: {
        quick: 'Quicksand, sans-serif'
      },

      animation: {
        sliding: "slide 1s forwards ",
        closing: "close 2s forwards "
      },

      keyframes: {
        slide : {
          '0%': {transform: 'translateX(400px) '},
          '100%': {transform: "translateX(0px) "}
        },
        close: {
          '0%': {transform: "translateX(0px)"},
          '100%': {transform: "translateX(800px)"},
        }
      }
    },
  },
  plugins: [],
}