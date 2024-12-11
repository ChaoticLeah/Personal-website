import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			dropShadow: {
				glow: ['0 0px 20px rgba(255,255, 255, 0.35)', '0 0px 65px rgba(255, 255,255, 0.2)'],
				glowpink: ['0 0px 20px rgba(245, 169, 184, 0.35)', '0 0px 65px rgba(245, 169, 184, 0.2)'],
				glowblue: ['0 0px 20px rgba(91, 206, 250, 0.35)', '0 0px 65px rgba(91, 206, 250, 0.2)'],
				glowtrans: [
					'0 0px 20px rgba(91, 206, 250, 0.4)',
					'0 0px 40px rgba(245, 169, 184, 0.4)',
					'0 0px 60px rgba(255, 255, 255, 0.1)',
					'0 0px 80px rgba(245, 169, 184, 0.4)',
					'0 0px 100px rgba(91, 206, 250, 0.4)'
				]
			}
		}
	},

	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['light'],
					primary: 'blue',
					secondary: 'teal'
				},
				dark: {
					...require('daisyui/src/theming/themes')['dark'],
					primary: '#5852e0',
					secondary: '#f549ec',
					accent: '#ce9b27'
				}
			}
		]
	},

	plugins: [daisyui]
} satisfies Config;
