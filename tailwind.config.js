/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mont: "Montserrat",
    },

    extend: {
      backgroundImage: {
        hero: "url('assets/background.png')",
      },
    },
  },
  plugins: [],
};
