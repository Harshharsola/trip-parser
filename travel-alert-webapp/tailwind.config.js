/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0EA5E9', // #0EA5E9
        'primary-light': '#7DD3FC', // #7DD3FC  
        'primary-dark': '#0369A1', // #0369A1
        'secondary': '#10B981', // #10B981
        'secondary-light': '#6EE7B7', // #6EE7B7
        'secondary-dark': '#047857', // #047857
        'accent': '#F59E0B', // #F59E0B
        'accent-light': '#FCD34D', // #FCD34D
        'accent-dark': '#B45309', // #B45309
      },
    },
  },
  plugins: [],
}