import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react( ),tailwindcss()],
  base: '/scsinvictus_landingpage/', // Add this line for GitHub Pages subpath
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
