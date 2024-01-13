import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          600: "#854DFF",
        },
        red: {
          500: "#FF5757",
        },
        gray: {
          50: "#F0F0F0",
          100: "#DBDBDB",
          600: "#716F6F",
        },
        neutral: {
          950: "#141414",
        },
      },

      screens: {
        tabletL: { max: "768px" },
      },
    },
  },
  plugins: [],
};
export default config;
