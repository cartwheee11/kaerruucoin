import { fileURLToPath, URL } from 'node:url';
import mkcert from 'vite-plugin-mkcert'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '127.0.0.1'
  },
  plugins: [
    vue(), mkcert()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
