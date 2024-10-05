/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "3rem",
			},
		},
		extend: {
			colors: {
				"primary-1": "#0c0c0e",
				"primary-2": "#708af4",
				"primary-3": "#f8f8ff",
				"primary-4": "#202131",
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif", "system-ui"],
			},
		},
	},
  important: true,
	plugins: [],
};
