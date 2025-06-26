import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/botc-grim/',
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ['@tailwindcss/vite']
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
});
