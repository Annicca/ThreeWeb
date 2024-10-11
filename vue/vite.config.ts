import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import sass from 'sass'
import postcssNesting from 'postcss-nesting'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  css: {
    loaderOptions: {
      css: {
        modules: {
          auto: () => true
        }
      }
    },
    preprocessorOptions: {
      scss: {
        implementation: sass,
        postcssNesting,
        api: 'modern-compiler'
      }
    },
    postcss: {
      plugins: [autoprefixer({})]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
