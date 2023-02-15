import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  base: "/javascript-fullstack-module01",
  build: {
      rollupOptions: {
      external: /^lit/,
    },
  },
  plugins: [
    RubyPlugin(),
  ],
  define: {
    'process.env': {
      NODE_DEBUG: false,
    }
  }
})
