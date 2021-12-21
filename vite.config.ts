import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [vue(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/scss/_variables.scss";'
      }
    }
  }
})
