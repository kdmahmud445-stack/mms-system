import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true,
    port: 2026,
    allowedHosts: ['mms'] // mms হোস্টকে পারমিশন দেওয়া হলো
  }
})