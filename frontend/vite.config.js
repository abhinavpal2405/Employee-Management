import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';  // For React projects

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false
    }
  }
});
