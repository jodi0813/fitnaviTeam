import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // 解決無法偵測變動問題
    },
    host: true // 讓網路上其他裝置也能訪問，並避免某些本地端偵測失效
  }
})