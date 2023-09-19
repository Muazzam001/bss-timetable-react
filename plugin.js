import theme from "tailwindcss/defaultTheme.js";

const plugin = require("tailwindcss/plugin");

export default plugin(
  function ({ addBase, theme }) {
    addBase({
      [`.snap`]: {
        scrollSnapType: `x mandatory`,
        scrollBehavior: `smooth`,
      },

      [`.snap::-webkit-scrollbar`]: {
        display: "none",
      },

      [`.snap > img`]: {
        scrollSnapAlign: "center",
      },

      [`body`]: {
        fontFamily: `'Poppins', 'Raleway', 'Montserrat', 'Open Sans', 'sans-serif'`,
        overflowX: "hidden",
        color: "#292724",
      },

      /* v-2.0 start from here */
      [`.container`]: {
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "16px",
        paddingRight: "16px",
      },
    });
  },
  {
    theme: {
      extend: {
        screens: {
          // 'h2-h3-tall': { 'raw': '(min-height: 786px and max-height: 1024px)' },
          // 'h1-h2-tall': { 'raw': '(min-height: 640px and max-height: 768px)' },
          "h-h1-tall": { raw: "(min-height: 480px and max-height: 640px)" },
          "mh5-tall": { raw: "(max-height: 1024px)" },
          "mh4-tall": { raw: "(max-height: 992px)" },
          "mh3-tall": { raw: "(max-height: 768px)" },
          "mh2-tall": { raw: "(max-height: 640px)" },
          "mh-tall": { raw: "(max-height: 480px)" },
          "mh0-tall": { raw: "(max-height: 320px)" },
          "h5-tall": { raw: "(min-height: 1024px)" },
          "h4-tall": { raw: "(min-height: 992px)" },
          "h3-tall": { raw: "(min-height: 768px)" },
          "h2-tall": { raw: "(min-height: 640px)" },
          "h1-tall": { raw: "(min-height: 480px)" },
          "h0-tall": { raw: "(min-height: 320px)" },
          "2xl-2k": { min: "1536px", max: "2159.98px" },
          "2xl-3xl": { min: "1536px", max: "1919.98px" },
          "xl-2k": { min: "1536px", max: "2159.98px" },
          "xl-3xl": { min: "1280px", max: "1919.98px" },
          "xl-2xl": { min: "1280px", max: "1535.98px" },
          "lg-2k": { min: "1024px", max: "2159.98px" },
          "lg-3xl": { min: "1024px", max: "1919.98px" },
          "lg-2xl": { min: "1024px", max: "1279.98px" },
          "lg-xl": { min: "1024px", max: "1279.98px" },
          "md-xl": { min: "768px", max: "1279.98px" },
          "md-lg": { min: "768px", max: "1023.98px" },
          "sm-xl": { min: "575px", max: "1279.98px" },
          "sm-lg": { min: "575px", max: "1023.98px" },
          "sm-md": { min: "575px", max: "767.98px" },
          "xs-xl": { min: "480px", max: "1279.98px" },
          "xs-lg": { min: "480px", max: "1023.98px" },
          "xs-md": { min: "480px", max: "767.98px" },
          "xs-sm": { min: "480px", max: "574.98px" },
          "2xs-sm": { min: "320px", max: "574.98px" },
          "2xs-xs": { min: "320px", max: "479.98px" },
          "max-2k": { max: "2159.98px" },
          "max-3xl": { max: "1919.98px" },
          "max-2xl": { max: "1535.98px" },
          "max-xl": { max: "1279.98px" },
          "max-lg": { max: "1023.98px" },
          "max-md": { max: "767.98px" },
          "max-sm": { max: "574.98px" },
          "max-xs": { max: "479.98px" },
          "max-2xs": { max: "319.98px" },
          "2xs": "320px",
          xs: "480px",
          sm: "575px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1600px",
          "3xl": "1920px",
          "2k": "2160px",
          "4k": "4096px",
          "8k": "8192px",
        },
        colors: {
          transparent: "transparent",
          black: "#000",
          white: "#fff",
          dark: "#292724",
          light: "#FFFAFB",
          primary1: "#0228BB",
          primary2: "#3F64F3",
          primary3: "#DD325C",
          primary4: "#F1C40F",
          primary5: "#252627",
          primary6: "#FEF1F5",
          primary7: "#A7B3C3",
          secondary1: "#192649",
          secondary2: "#3B3B3B",
          secondary3: "#587194",
          secondary4: "#F2F8FF",
          secondary5: "#DBE5F2",
          secondary6: "#F3F6FF",
          secondary7: "#ECF0F1",
          heading: "#252627",
          subheading: "#3B3B3B",
          detailed: "#516888",
          label: "#A7B3C3",
          success: "#3BC171",
          hyperlink: "#192649",
          "gradient-a1": "#0D4AF9",
          "gradient-a2": "#244DC1",
          "gradient-b1": "#EDF5FF",
          "gradient-b2": "#D6E3F3",
          "legend-back": "#263238",
          "legend-new": "#4361EE",
          "legend-cancelled": "#ECF0F1",
          "legend-done": "#3BC171",
          "legend-helpful": "#F1C40F",
          "legend-danger": "#DD325C",
          "primary-blue": "#79B8FA",

          // Blue
          "blue-light1": "#CEE8F5",
          "blue-light2": "#D1E7FF",
          "blue-medium1": "#4193E5",
          "blue-medium2": "#5D93C9",
          "blue-dark1": "#16648B",
          "blue-dark2": "#175088",

          // Gray
          "gray-light": "#F7F7F6",
          "gray-light-yellowish": "#F3F2EF",
          "gray-light-bluish": "#F1F2F4",
          "gray-medium": "#D4D4D4",
          "gray-dark1": "#707070",
          "gray-dark2": "#C8C8C8",

          // Red
          "red-medium": "#FF6E6E",
          "red-dark": "#C70039",

          // yellow
          "yellow-medium": "#FFAC1C",
          "yellow-dark": "#E39E2F",

          // maroon
          maroon: "#CA4B4B",

          // Subjects
          chemistry: "#997D6C",
          islamiyat: "#88DEDE",
          "pak-study": "#5BCB5A",
          physics: "#88DEDE",
          urdu: "#88DEDE",
          biology: "#88DEDE",
          maths: "#88DEDE",
          english: "#88DEDE",
          computer: "#88DEDE",
          hqt: "#88DEDE",
          accounting: "#88DEDE",
          bs: "#88DEDE",
          economics: "#88DEDE",
        },
        fontFamily: {
          primary: [
            "Poppins",
            "Raleway",
            "Montserrat",
            "Open Sans",
            "sans-serif",
          ],
          secondary: [
            "Raleway",
            "Poppins",
            "Montserrat",
            "Open Sans",
            "sans-serif",
          ],
          tertiary: [
            "Montserrat",
            "Poppins",
            "Raleway",
            "Open Sans",
            "sans-serif",
          ],
          default: [
            "Open Sans",
            "Poppins",
            "Raleway",
            "Montserrat",
            "sans-serif",
          ],
        },
        fontSize: {
          h1: ["3.875rem", { lineHeight: "5rem", fontWeight: "700" }],
          h2: ["3rem", { lineHeight: "3.875rem", fontWeight: "600" }],
          h3: ["2.25rem", { lineHeight: "3rem", fontWeight: "500" }],
          h4: ["1.625rem", { lineHeight: "2.25rem", fontWeight: "500" }],
          h5: ["1.25rem", { lineHeight: "2rem", fontWeight: "500" }],
          h6: ["1.125rem", { lineHeight: "1.75rem", fontWeight: "400" }],
          h7: ["1rem", { lineHeight: "1.75rem", fontWeight: "400" }],
          "15xl": ["10rem", { lineHeight: "1" }],
          "14xl": ["9rem", { lineHeight: "1" }],
          "13xl": ["8rem", { lineHeight: "1" }],
          "12xl": ["7rem", { lineHeight: "1" }],
          "11xl": ["6rem", { lineHeight: "1" }],
          "10xl": ["5rem", { lineHeight: "1" }],
          "9xl": ["4.5rem", { lineHeight: "5.5rem" }],
          "8xl": ["4rem", { lineHeight: "4.5rem" }],
          "7xl": ["3.5rem", { lineHeight: "4.25rem" }],
          "6xl": ["3rem", { lineHeight: "3.75rem" }],
          "5xl": ["2.5rem", { lineHeight: "2.75rem" }],
          "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
          "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
          "2xl": ["1.5rem", { lineHeight: "2rem" }],
          xl: ["1.25rem", { lineHeight: "1.75rem" }],
          lg: ["1.125rem", { lineHeight: "1.625rem" }],
          base: ["1rem", { lineHeight: "1.5rem" }],
          md: ["0.9375rem", { lineHeight: "1.25rem" }],
          sm: ["0.875rem", { lineHeight: "1.125rem" }],
          xs: ["0.75rem", { lineHeight: "1rem" }],
          tny: ["0.625rem", { lineHeight: "1rem" }],
        },
        borderRadius: {
          none: "0",
          xs: "0.125rem",
          sm: "0.25rem",
          md: "0.375rem",
          lg: "0.5rem",
          base: "0.625rem",
          xl: "0.75rem",
          "2xl": "1rem",
          "3xl": "1.25rem",
          "4xl": "1.5rem",
          "5xl": "1.75rem",
          "6xl": "2rem",
          "7xl": "2.25rem",
          "8xl": "2.5rem",
          "9xl": "2.75rem",
          full: "9999px",
        },
        spacing: {
          px: "1px",
          0: "0",
          0.5: "0.125rem",
          1: "0.25rem",
          1.5: "0.375rem",
          2: "0.5rem",
          2.5: "0.625rem",
          3: "0.75rem",
          3.5: "0.875rem",
          4: "1rem",
          5: "1.25rem",
          6: "1.5rem",
          7: "1.75rem",
          8: "2rem",
          9: "2.25rem",
          10: "2.5rem",
          11: "2.75rem",
          12: "3rem",
          13: "3.25rem",
          14: "3.5rem",
          15: "3.75rem",
          16: "4rem",
          18: "4.5rem",
          20: "5rem",
          22: "5.5rem",
          24: "6rem",
          26: "6.5rem",
          28: "7rem",
          30: "7.5rem",
          32: "8rem",
          34: "8.5rem",
          36: "9rem",
          38: "9.5rem",
          40: "10rem",
          42: "10.5rem",
          44: "11rem",
          46: "11.5rem",
          48: "12rem",
          50: "12.6rem",
          52: "13rem",
          54: "13.5rem",
          56: "14rem",
          58: "14.5rem",
          60: "15rem",
          62: "15.5rem",
          64: "16rem",
          66: "16.5rem",
          68: "17rem",
          70: "17.5rem",
          72: "18rem",
          74: "18.5rem",
          76: "19rem",
          78: "19.5rem",
          80: "20rem",
          82: "20.5rem",
          84: "21rem",
          86: "21.5rem",
          88: "22rem",
          90: "22.5rem",
          92: "23rem",
          94: "23.5rem",
          96: "24rem",
          98: "25rem",
          100: "26rem",
          102: "27rem",
          104: "28rem",
          106: "29rem",
          108: "30rem",
          110: "31rem",
          112: "32rem",
          114: "33rem",
          116: "34rem",
          118: "35rem",
          120: "40rem",
        },
        boxShadow: {
          all: "0 0 10px lightgrey",
          one: "0 1px 2px rgba(0, 0, 0, 0.12)",
          two: "0 1px 4px rgba(0, 0, 0, 0.12)",
          three: "0 1px 5px rgba(0, 0, 0, 0.12)",
          four: "0 4px 10px rgba(0, 0, 0, 0.12)",
          input: "0 7px 20px rgba(0, 0, 0, 0.03)",
          pricing: "0 39px 23px -27px rgba(0, 0, 0, 0.04)",
          card: "0 1px 3px rgba(0, 0, 0, 0.12)",
          switch: "0 0 5px rgba(0, 0, 0, 0.15)",
          testimonial: "0 60px 120px -20px #EBEFFD",
        },
        dropShadow: {
          tooltip: "0 0 2px rgba(0, 0, 0, 0.14)",
          one: "0 1px 2px rgba(0, 0, 0, 0.12)",
          two: "0 1px 4px rgba(0, 0, 0, 0.12)",
          three: "0 1px 5px rgba(0, 0, 0, 0.12)",
          four: "0 4px 10px rgba(0, 0, 0, 0.12)",
        },
        backgroundImage: {
          none: "none",
          "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
          "gradient-to-tr":
            "linear-gradient(to top right, var(--tw-gradient-stops))",
          "gradient-to-r":
            "linear-gradient(to right, var(--tw-gradient-stops))",
          "gradient-to-br":
            "linear-gradient(to bottom right, var(--tw-gradient-stops))",
          "gradient-to-b":
            "linear-gradient(to bottom, var(--tw-gradient-stops))",
          "gradient-to-bl":
            "linear-gradient(to bottom left, var(--tw-gradient-stops))",
          "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
          "gradient-to-tl":
            "linear-gradient(to top left, var(--tw-gradient-stops))",
        },
        backgroundPosition: {
          top: "top",
          right: "right",
          bottom: "bottom",
          left: "left",
          center: "center",
          "left-bottom": "left bottom",
          "left-top": "left top",
          "right-bottom": "right bottom",
          "right-top": "right top",
          "bottom-4": "center bottom 1rem",
          "top-4": "center top 1rem",
        },
      },
    },
  }
);
