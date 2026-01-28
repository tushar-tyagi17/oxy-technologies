import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.indexOf('node_modules') !== -1) {
            if (id.indexOf('react') !== -1 || id.indexOf('react-dom') !== -1) {
              return 'react-vendor';
            }
            if (id.indexOf('react-router') !== -1) {
              return 'router-vendor';
            }
            if (id.indexOf('framer-motion') !== -1) {
              return 'animation-vendor';
            }
            if (id.indexOf('lucide-react') !== -1) {
              return 'ui-vendor';
            }
            if (id.indexOf('@headlessui') !== -1 || id.indexOf('@heroicons') !== -1) {
              return 'ui-components';
            }
            return 'vendor';
          }
        },
      },
    },
  },
})
