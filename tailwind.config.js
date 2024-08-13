/** @type {import('tailwindcss').Config} */
const { Padding } = require("@mui/icons-material")
const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        "marquee-x": "marquee-x  4s linear infinite",
      },
      keyframes: {
        "marquee-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
}
