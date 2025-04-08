// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#2C6B52", // Figma’daki yeşilin hex kodu
      },
    },
  },
  plugins: [],
};
