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
    rolldownOptions: {
      output: {
        // Separate React from app code so the vendor chunk is cached longer
        // Note: Vite 8 + Rolldown does not support the object form of manualChunks.
        // Use codeSplitting.groups with a regex test instead.
        codeSplitting: {
          groups: [
            {
              name: 'react',
              test: /node_modules[\\/](react|react-dom)[\\/]/,
            },
          ],
        },
      },
    },
  },
})
