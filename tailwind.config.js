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
          from: { transform: 'translateY(100px)', opacity: 0 },
          to: { transform: 'translateY(0px)', opacity: 1 },
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
    colors: {
      background: { light: '#E1E1E1', dark: '#222222' },
      'background-secondary': { light: '#CFCFCF', dark: '#3B3B3B' },
      text: { light: '#222222', dark: '#E1E1E1' },
      muted: { light: '#7E7E7E', dark: '#9E9E9E' },
      accent: { light: '#E67635', dark: '#94C843' },
    },
  },
  plugins: [],
}
