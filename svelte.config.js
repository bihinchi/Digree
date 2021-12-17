import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import svg from '@poppanator/sveltekit-svg'
import { resolve } from "path";



/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		
		target: '#svelte',
		
		vite: {
			plugins: [svg()],
			resolve: {
				alias: {
					$components: resolve("./src/components"),
					$assets: resolve("./static/assets")
				}
			}
		},

		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),

		


	}
};

export default config;
