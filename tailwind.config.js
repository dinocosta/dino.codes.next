/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
		colors: {
			'white': '#f3f0e8',
			'light-gray': '#e6e4e0',
			'gray': '#858480',
			'dark-gray': '#5e5e5e',
			'olive': '#b9b99d',
			'orange': '#dcb482',
			'starlight': '#e0cfc3',
			'light-brown': '#d5caba',
			'brown': '#c09e85',
			'dark-brown': '#8f837a',
			'matcha': '#b0b9a8',
			'green': '#606c5a',
		},
    extend: {
    },
  },
  plugins: [],
}
