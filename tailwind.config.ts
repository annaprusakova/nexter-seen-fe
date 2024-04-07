import type { Config } from 'tailwindcss';

const config: Config = {
	mode: 'jit',
	important: true,
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1440px'
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#AD88C6',
					secondary: '#E1AFD1',
					accent: '#F2BED1',
					neutral: '#4C4452',
					'base-100': '#FFF6FF',
					info: '#0086C8',
					success: '#007162',
					warning: '#FFAE87',
					error: '#cf003b'
				}
			}
		]
	}
};
export default config;
