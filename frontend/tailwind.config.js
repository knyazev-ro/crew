/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        rich_black: {
          DEFAULT: "#0a0908",
          100: "#0c1010"
        },
        purple_sky: {
          DEFAULT: "#0A9396",
          100: "#f6bd60",
          300: "#f9c74f",
          400: "#efefd0",
          500: "#0B60B0",
        },
        bg_crew: {
          DEFAULT: "#0d1b2a",
          100: "#1b263b",
        },
        tiffany_blue: {
          DEFAULT: "#94d2bd",
          100: "#153229",
        },
        vanilla: {
          DEFAULT: "#e9d8a6",
          100: "#403410",
        },
        gamboge: {
          DEFAULT: "#FFA3FD",
          100: "#301f00",
        },
        alloy_orange: {
          DEFAULT: "#ca6702",
          100: "#281400",
        },
        rust: {
          DEFAULT: "#bb3e03",
          100: "#250c01",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
