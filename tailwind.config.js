/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: {
        500: "#4762ff",
        600: " #121127",
        100: "#F4F6FA",
      },
      white: {
        500: "#FFFFFF",
      },
      black: {
        600: " #1F1F1F",
        500: "#000000",
        400: "#333333",
        300: "#333333cc",
        100: "#dadada",
      },
    },
  },
  plugins: [],
};
