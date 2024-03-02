import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: true,
  },
  theme: {
    extend: {
      colors: {
        overlay: '#f4fff8ff', // Mint Cream
        background: '#000f08ff', // Night
        button: '#F8F32B', // Cadet Gray
        headline: '#f4fff8ff', // Mint Cream
        paragraph: '#8baaadff', // Cadet Gray
        buttonText: '#000f08ff', // Night
        stroke: '#4d4847ff', // Davy's Gray
        main: '#8baaadff', // Cadet Gray
        highlight: '#1c3738ff', // Gunmetal
        secondary: '#f4fff8ff', // Mint Cream
        tertiary: '#4d4847ff', // Davy's Gray
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Roboto Slab', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
