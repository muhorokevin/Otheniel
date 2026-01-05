
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    // This ensures process.env.API_KEY is available in the browser
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
  server: {
    hmr: true,
  },
  build: {
    outDir: 'dist',
  }
});
