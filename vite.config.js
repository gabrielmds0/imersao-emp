import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/imersao-para-empresarios-v3/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
