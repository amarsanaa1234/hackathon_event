/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fluidTypography: {
      remSize: 10,
      minScreenSize: 600,
      maxScreenSize: 1280,
      minTypeScale: 1.25,
      maxTypeScale: 1.618,
      lineHeight: 1.2,
    },
    extend: {},
  },
  plugins: [require("tailwind-fluid-typography")],
};
