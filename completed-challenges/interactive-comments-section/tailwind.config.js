/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#f5f6fa",
          100: "#eaecf1",
          200: "#c3c4ef",
          300: "#67727e",
        },
        blue: {
          200: "#c5c6ef",
          500: "#5457b6",
          700: "#67727e",
          950: "#324152",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
