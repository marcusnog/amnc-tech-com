import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/amnc-tech-com/',
  plugins: [react(), tailwindcss()],
})
