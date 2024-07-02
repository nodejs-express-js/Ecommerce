import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/seller':"http://localhost:8000",
      '/product':"http://localhost:8000",
      '/customer':"http://localhost:8000"
    }
  },
  plugins: [react()],
})
