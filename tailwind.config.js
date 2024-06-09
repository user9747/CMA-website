/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        fade: "fadeIn .4s ease-in",
        bg: "fadeInBg .4s ease-in",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: 0.3 },
          "100%": { opacity: 1 },
        },
        fadeInBg: {
          "0%": { backgroundColor: "black" },
          "100%": { backgroundColor: "white" },
        },
      }),
    },
  },
  plugins: [],
};
