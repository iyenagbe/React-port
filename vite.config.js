import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'


export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@Lib': path.resolve(__dirname, 'src/Lib'),
      '@': path.resolve(__dirname, 'src/'),
    },
  },
})
