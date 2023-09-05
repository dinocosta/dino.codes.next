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
			}
		},
	},
	plugins: [],
}
