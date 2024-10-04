import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import sass from 'sass';
import postcssNesting from 'postcss-nesting';
import autoprefixer from 'autoprefixer'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint({
    cache: false,
    include: ['./src/**/*.ts', './src/**/*.tsx'],
    exclude: [],
  }),
  svgr({
    include: "**/*.svg?react",

  })],
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
})
