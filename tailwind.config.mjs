/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
			
				socials: '#0187B2',
				faq: '#AAAAAA',
				footer: '#404040',
				banner: '#0086B1'
			},
			
		},
	},
	darkMode: "class",
	plugins: [nextui()]
}
