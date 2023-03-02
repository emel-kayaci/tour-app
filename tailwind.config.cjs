/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F8FF",
        "gray-50": "#DCEAFE",
        "gray-100": "#CED7E4",
        "gray-500": "#454545",
        "primary-100": "#f7e9bb",
        "primary-300": "#F3C42F",
        "primary-500": "#E4B41B",
        "secondary-300": "#EFEFFF",
        "secondary-400": "#C6C8FF",
        "secondary-500": "#6569D9",
      },
      backgroundImage: (theme) => ({
        "gradient-purple": "linear-gradient(90deg, #484A66 0%, #6569D9 100%)",
        "mobile-home": "url('./assets/HomePage.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        tetext: "url('./assets/TravelExpressText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        places: "url('./assets/Places.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
