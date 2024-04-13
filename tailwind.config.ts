import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      neutral: colors.neutral,
      primary: {
        color: colors.blue["700"],
        accent: colors.blue["800"],
      },
      secondary: {
        dark: colors.neutral["900"],
        light: colors.neutral["100"],
      },
      success: {
        100: colors.green["100"],
        300: colors.green["300"],
        500: colors.green["500"],
        700: colors.green["700"],
        900: colors.green["900"],
      },
      error: {
        100: colors.red["100"],
        300: colors.red["300"],
        500: colors.red["500"],
        700: colors.red["700"],
        900: colors.red["900"],
      },
      warning: {
        100: colors.yellow["100"],
        300: colors.yellow["300"],
        500: colors.yellow["500"],
        700: colors.yellow["700"],
        900: colors.yellow["900"],
      },
      shades: {
        white: colors.white,
        black: colors.black,
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
export default config;
