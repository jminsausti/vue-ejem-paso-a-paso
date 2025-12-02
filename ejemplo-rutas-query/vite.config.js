import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Configuración mínima de Vite para Vue 3
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173
  }
})
