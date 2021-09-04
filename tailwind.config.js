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
			colors: {
				brand: "#A81212",
			},
			backgroundImage: (theme) => ({
				pattern:
					"url('https://res.cloudinary.com/tedx-youth-ismailia-stem/image/upload/v1630784690/background_1_hhr0cl.png')",
			}),
			keyframes: {
				readMoreButton: {
					"0%, 100%": { transform: "translateX(0)" },
					"50%": { transform: "translateX(0.5rem)" },
				},
			},
			animation: {
				readMoreButton: "readMoreButton 1s ease-in-out infinite",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
