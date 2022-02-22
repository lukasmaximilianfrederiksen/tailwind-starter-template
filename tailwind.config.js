const { secondary } = require("daisyui/src/colors");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
  colors: {
    // mørke lilla
    primær: "#381460",
    // rød
    secondary: "#FE346E",
    // rød lilla
    third: "#A32F80",
    // lilla
    fourht: "#8E3AEB",
    // orange
    fifth: "#FF6363",
    // gul
    six: "#FFBD69",
  },
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
