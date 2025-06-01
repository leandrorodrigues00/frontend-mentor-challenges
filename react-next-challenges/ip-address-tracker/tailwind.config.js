/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "very-dark-gray": "#2B2B2B",
        "dark-gray": "#969696",
      },
    },
    backgroundImage: {
      "header-desktop": "url(/images/pattern-bg-desktop.png)",
    },
  },
  plugins: [],
};
