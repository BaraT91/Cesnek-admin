import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Generate source maps
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://cesnek-api.tondakozak.cz',
        changeOrigin: true,
      },
    },
  },
});
