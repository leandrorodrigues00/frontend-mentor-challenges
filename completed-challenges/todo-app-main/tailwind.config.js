/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#e4e5f1',
          500: '#3a7bfd',
        },

        gray: {
          100: '#fafafa',
          200: '#d2d3db',
          400: '#9394a5',
          600: '#484b6a',
        },

        dark: {
          100: '#161722',
          200: '#25273c',
          300: '#cacde8',
          400: '#e4e5f1',
          500: '#777a92',
          600: '#4d5066',
          700: '#393a4c',
        },
      },
      backgroundImage: {
        'header-mob-light': "url('/images/bg-mobile-light.jpg')",
        'header-mob-dark': "url('/images/bg-mobile-dark.jpg')",

        'header-desk-light': "url('/images/bg-desktop-light.jpg')",
        'header-desk-dark': "url('/images/bg-desktop-dark.jpg')",
        'check-gradient':
          'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
      },
      maxWidth: {
        app: '33.75rem',
      },
    },
  },
  plugins: [],
}
