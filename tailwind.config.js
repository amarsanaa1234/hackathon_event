/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "rampart-one": ["Rampart One", "sans-serif"],
      },
      fontSize: {
        clamp: "clamp(2.1rem, 8vw, 10rem)",
        clamp2: "clamp(1rem, 8vw, 4rem)",
      },
    },
    plugins: [require("tailwind-fluid-typography")],
  },
};
