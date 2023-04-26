/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
		colors: {
			'white': '#FFFFFF',
			'orange': '#F3B440',
			'black': '#272725',
			'gray': '#939393'
		},
    extend: {
    },
  },
  plugins: [],
}
