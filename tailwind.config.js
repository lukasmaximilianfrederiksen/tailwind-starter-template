const { secondary } = require("daisyui/src/colors");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // mørke lilla
      primær: "#381460",
      // rød
      secondary: "#FE346E",
      // rød lilla
      third: "#A32F80",
      // lilla
      fourth: "#8E3AEB",
      // orange
      fifth: "#FF6363",
      // gul
      six: "#FFBD69",
    },
    extend: {},
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
