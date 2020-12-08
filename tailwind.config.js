const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        logo: ["montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.blueGray,
      },
      backgroundImage: (theme) => ({
        "dark-cross-pattern": "url('/images/dark-cross-pattern.png')",
      }),
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
