/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        clay: 'rgb(var(--color-clay) / <alpha-value>)',
        cream: 'rgb(var(--color-cream) / <alpha-value>)',
        charcoal: 'rgb(var(--color-charcoal) / <alpha-value>)',
        sage: 'rgb(var(--color-sage) / <alpha-value>)',
      },
      backgroundImage: {
        'grain-pattern': "url('https://www.transparenttextures.com/patterns/cardboard.png')",
      },
    },
  },
  plugins: [],
};