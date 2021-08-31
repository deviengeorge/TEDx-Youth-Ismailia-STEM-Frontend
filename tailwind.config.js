module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			normal: ["Montserrat", "ui-sans-serif", "sans-serif"],
		},
		container: {
			center: true,
			padding: "1rem",
		},
		extend: {
			backgroundImage: (theme) => ({
				pattern: "url('/images/background.png')",
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
