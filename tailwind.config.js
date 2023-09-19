/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: ["class", '[data-mode="dark"]'],
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  theme: {},
  corePlugins: {
    aspectRatio: false,
    container: false,
  },
  plugins: [
    require("./plugin"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          "@screen max-xs": {
            paddingLeft: 0,
            paddingRight: 0,
          },
          "@screen xs": {
            // maxWidth: '450px',
          },
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "980px",
          },
          "@screen xl": {
            maxWidth: "1216px",
          },
          "@screen 2xl": {
            maxWidth: "1456px",
          },
          "@screen 3xl": {
            maxWidth: "1824px",
          },
          "@screen 2k": {
            maxWidth: "2000px",
          },
        },
      });
    },
    require("cssnano")({ preset: "default" }),
    forms,
  ],
};
