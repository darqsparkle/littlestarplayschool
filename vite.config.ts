import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['@emailjs/browser'] // Add EmailJS to be pre-bundled
  },
  build: {
    outDir: 'dist', // Output directory
    rollupOptions: {
      // Explicitly mark these as external if needed
      external: [],
      // Or, alternatively, ensure they're properly included
      output: {
        manualChunks: {
          vendor: ['@emailjs/browser']
        }
      }
    }
  },
  resolve: {
    alias: {
      '@emailjs/browser': '@emailjs/browser'
    }
  }
});