/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/sketches/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          'from': { transform: 'translateY(100px)', opacity: 0 },
          'to': { transform: 'translateY(0px)', opacity: 1 },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)']
      },
      colors: {
        // Flexoki color scheme - https://stephango.com/flexoki.
        'bg': { 'light': '#FFFCF0', 'dark': '#100F0F' },
        'bg-2': { 'light': '#F2F0E5', 'dark': '#1C1B1A' },
        'ui': { 'light': '#E6E4D9', 'dark': '#282726' },
        'ui-2': { 'light': '#DAD8CE', 'dark': '#343331' },
        'ui-3': { 'light': '#CECDC3', 'dark': '#403E3C' },
        'tx': { 'light': '#100F0F', 'dark': '#CECDC3' },
        'tx-2': { 'light': '#6F6E69', 'dark': '#878580' },
        'tx-3': { 'light': '#B7B5AC', 'dark': '#575653' },
        're': { 'light': '#D14D41', 'dark': '#AF3029' },
        'or': { 'light': '#DA702C', 'dark': '#BC5215' },
        'ye': { 'light': '#D0A215', 'dark': '#AD8301' },
        'gr': { 'light': '#879A39', 'dark': '#66800B' },
        'cy': { 'light': '#3AA99F', 'dark': '#24837B' },
        'bl': { 'light': '#4385BE', 'dark': '#205EA6' },
        'pu': { 'light': '#8B7EC8', 'dark': '#5E409D' },
        'ma': { 'light': '#CE5D97', 'dark': '#A02F6F' },
      }
    },
  },
  plugins: [],
}
