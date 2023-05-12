/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
		colors: {
			black: '#333333',
			white: '#F2F2F2',
			gray: '#999999',
			yellow: '#F4B400',
			blue: '#4285F4',
		},
    extend: {
    },
  },
  plugins: [],
}
