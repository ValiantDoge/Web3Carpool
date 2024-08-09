import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/socket.io/map': {
        target: 'http://localhost:3000/map',
        changeOrigin: true,
        ws: true
      }
    }
  },
  
  plugins: [react()],
});
