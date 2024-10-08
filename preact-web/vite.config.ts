import { defineConfig } from 'vite';
import sass from 'sass';
import preact from '@preact/preset-vite';
import postcssNesting from 'postcss-nesting';
import autoprefixer from 'autoprefixer';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		preact(),
		svgr({
			include: "**/*.svg?react",
		
		}),
	],
	css: {
		preprocessorOptions: {
		  scss: {
			implementation: sass,
			postcssNesting,
        	api: 'modern-compiler'
		  },
		},
		postcss: {
			plugins: [
			  autoprefixer({})
			],
		}
	  },
	  resolve: {
		alias: {
		  src: "/src",
		  components: '/src/components',
		  hooks: 'src/hooks',
		  utils: '/src/utils',
		  assets: '/src/assets',
		  types: '/src/types',
		  uikit: '/src/uikit',
		  'react-windowed-select': 'react-windowed-select/dist/main.js',
		}
	  }
});
