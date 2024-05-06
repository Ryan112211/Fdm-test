/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
	safelist: ["text-red-500", "hover", "active", "focus", "visited", "focus-visible"],
}
