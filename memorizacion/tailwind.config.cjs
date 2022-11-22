/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
        Noto: ["Noto Serif Khojki"],
        Lato: ["Lato"],
      },
    },
  },
  plugins: [],
};
