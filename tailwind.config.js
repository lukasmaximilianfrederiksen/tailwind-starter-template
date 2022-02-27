const { secondary } = require("daisyui/src/colors");
const { spacing } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // mørke lilla
        primær: "#381460",

        kalender: "#CCA6F6",
        // rød
        second: "#FE346E",
        // rød lilla
        third: "#A32F80",
        // lilla
        fourth: "#8E3AEB",
        // orange
        fifth: "#FF6363",
        // gul
        six: "#FFBD69",
      },
      spacing: {
        height: {
          128: "32rem",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],

  fontFamily: {
    roboto: "'Roboto', sans-serif",
    libre: "'Libre Franklin', sans-serif",
  },

  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
    ],
  },
};
