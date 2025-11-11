import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Auto base handling
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/Realtime_Chatbot/' : './',
}))