/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#BED7DC",
        primary: "#4f40e5",
        footer: "#344C64",
        glass: "rgba(214, 214, 214, 0.6)",
      },
      fontFamily: {
        urbanist: "Urbanist",
        Poppins: "Poppins",
        Tourney: "Tourney",
        BriemHand: "Briem Hand",
        Geological: "Geological",
        Monoton: "Monoton",
        Ubuntu : 'Ubuntu',
        Montserrat: 'Montserrat',
        Lato: 'Lato'
      },
    },
  },
  plugins: [],
};
