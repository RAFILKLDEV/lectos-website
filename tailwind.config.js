/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: { azul: "#46e2fa", roxo: "#bfbfff", amarelo: "#f4cd56", azul_lectos: "#0e87b0" },
		},
	},
	plugins: [],
};
