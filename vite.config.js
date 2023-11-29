import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-soveltavat-01-kurssitehtavat/",
  plugins: [react()],
})
