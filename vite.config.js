import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@Lib': path.resolve(__dirname, 'src/Lib'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
