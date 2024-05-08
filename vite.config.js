import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true, 
    setupFiles: './setup.js',
  },
  resolve: {
    alias: {
      '@mocks': './public/mockServiceWorker.js'
    },
  },
})

