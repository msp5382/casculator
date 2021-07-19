module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        base: "#C4883B",
        "base-light": "#dc9a44",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
