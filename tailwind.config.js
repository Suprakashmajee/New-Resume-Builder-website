/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#F0EEEB",
        sandMuted: "#E8E1DA",
        sand98: "#FAF8F4",
        ink: "#200E32",
        cream: "#6E6862",
        navy: "#1E3050",
        gray530: "#5B5B66",
      },
      fontFamily: {
        sans: ['"DM Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        hero: "0px 42px 84px -20px rgba(0,0,0,0.25)",
        comment: "0 12px 40px -12px rgba(32,14,50,0.28)",
        shot: "0 30px 80px -56px rgba(43,30,67,0.45)",
      },
    },
  },
  plugins: [],
};
