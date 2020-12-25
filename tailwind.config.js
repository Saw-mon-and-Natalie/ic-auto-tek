module.exports = {
	purge: [
		'./components/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontSize: {
				'2xs': '.7rem',
				'3xs': '0.65rem',
			},
			screens: {
				'xs': '500px',
			},
			colors: {
				indigo: {
					100: '#d6dbe4',
					200: '#adb7c9',
					300: '#8394ad',
					400: '#5a7092',
					500: '#314c77',
					600: '#273d5f',
					700: '#1d2e47',
					800: '#141e30',
					900: '#0a0f18',
				},
			},
		},
		fontFamily: {
			sans: [
				'inter',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
