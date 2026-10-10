import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Target modern browsers — smaller, faster output (no legacy polyfills)
    target: 'es2020',
    // Inline tiny assets (< 4 kB) as base64 to avoid extra round-trips
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // Separate React from app code so the vendor chunk is cached longer
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
})
