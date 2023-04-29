/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
		colors: {
      'black': '#1E1E1E',
      'cream': '#F4F0ED',
      'yellow': '#FFCA5E',
      'yellow-light': '#FFF1D8',
      'tangerine': '#FF8762',
      'white': '#FFFFFF',
      'blue': '#6FA1F7',
      'blue-light': '#D8E2FF',
      'peach': '#FFB07C',
      'nude': '#FFE6D5',
      'green': '#86DAC8',
      'green-light': '#C3F5EB'
		},
    extend: {
    },
  },
  plugins: [],
}
