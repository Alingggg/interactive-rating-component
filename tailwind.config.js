/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(25, 97%, 53%)",
        lightGray: "hsl(217, 12%, 63%)",
        darkBlue: "hsla(213, 19%, 18%, 0.7)",
        veryDarkBlue: "hsl(216, 12%, 8%)",
        lowOpacityGray: "hsla(217, 12%, 63%, 0.1)",
        lowOpacityOrange: "hsla(25, 97%, 53%, 0.8)",
      },
      fontFamily: {
        overpass: "overpass",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
