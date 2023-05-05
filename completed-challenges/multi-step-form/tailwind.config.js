/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "marine-blue": "#02295a",
        "purplish-blue": "#473dff",
        "pastel-blue": "#adbeff",
        "light-blue": "#bfe2fd",
        "strawberry-red": "#ed3548",
        "cool-gray": "#9699ab",
        "light-gray": "#d6d9e6",
        magnolia: "#f0f6ff",
        alabaster: "#fafbff",
      },

      backgroundImage: {
        "aside-desktop": "url(/images/bg-sidebar-desktop.svg)",
        "aside-mobile": "url(/images/bg-sidebar-mobile.svg)",
      },

      screens: {
        "-sm": { max: "600px" },
      },
    },
    screens: {
      xs2: "428px",
      xs: "600px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
