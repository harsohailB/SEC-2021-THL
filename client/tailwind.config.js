module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        spartan: ["Spartan", "sans-serif"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
