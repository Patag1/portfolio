import { colors } from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-news': "url('/news.png')"
      },
      colors: {
        ...colors,
        cwhite: '#FAFAFA',
        acqua: '#0DE7E0',
        yellowA: '#ECE900',
        cblack: '#151515',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
