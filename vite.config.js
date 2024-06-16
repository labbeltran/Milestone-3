import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {

    outDir: '../server/dist'
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server:{
    proxy: {
      '/api': {
        target: 'http://localhost:3010'
      },
    }
  }
});