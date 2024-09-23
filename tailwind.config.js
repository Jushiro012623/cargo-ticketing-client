/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      content: {
        'link': 'url("./assets/svg/check.svg")',
      },
      keyframes: {
        appear: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        show:{
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        }
      },

      animation: {
        show: "show .2s linear forwards",
        appear: "appear .2s linear forwards",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      colors: {
        custom: {
          bg: "#E9FEFF",
          100: "#C5EBFE",
          200: "#9BD9FE",
          300: "#6DC6FE",
          400: "#48B7FF",
          500: "#21A9FF",
          600: "#1D9BFF",
          700: "#1689FE",
          800: "#1177FF",
          900: "#2F2F2F",
        },
        primary: {
          DEFAULT: "#3A8DCA",
          dark: "#1B3A57",
          hover: "#2F78AF",
        },
        secondary: {
          DEFAULT: "#F08A5D",
          light: "#F7C548",
        },
        neutral: {
          DEFAULT: "#FAFAFA",
          light: "#F5F5F5",
        },
        accent: {
          mint: "#47AE62",
          sky: "#84CFFA",
          hover: "#8BBE99",
        },
        dark: {
          text: "#2C2C2C",
          error: "#E74C3C",
          border: "#b5b5b5",
        },
        fade: {
          DEFAULT: "#F9F9F9",
          light: "#F5F5F5",
          medium: "#E9E9E9",
          dark: "#D4D4D4",
          darker: "#a5a5a5",
        },
        bg: "#E5E6ED",
      },
    },
  },
  plugins: [],
};
