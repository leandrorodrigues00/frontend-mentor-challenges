/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-desktop": "url(/images/bg-header-desktop.svg)",
      },
      colors: {
        cyan: {
          50: "hsl(180, 52%, 96%)", //(Background)
          100: "hsl(180, 31%, 95%)", // (Filter Tablets)
          800: "hsl(180, 29%, 50%)", // Desaturated Dark Cyan:
          900: "hsl(180, 8%, 52%)", //Dark Grayish Cyan
          950: "hsl(180, 14%, 20%)", //Very Dark Grayish Cyan
        },
      },
      maxWidth: {
        app: "90rem",
        job: "69.375rem",
      },

      screens: {
        laptop: { max: "1024px" },
      },
    },
  },
  plugins: [],
};
