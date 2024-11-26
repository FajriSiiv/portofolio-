/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#f4f4f4",
        primary: "#141414",
        textColor2: "#ee6c4d",
      },
      boxShadow: {
        navbar:
          "0px 4px 8px rgba(34,42,53,.05), 0px 0px 0px 1px rgba(34,42,53,.08), 0px 1px 5px -4px rgba(19,19,22,.7)",
      },
      fontFamily: { matter: ["Matter"] },
    },
    screens: {
      lg: { max: "1600px" },
      md: { max: "1024px" },
      sm: { max: "768px" },
      xs: { max: "500px" },
    },
  },
  plugins: [],
};
