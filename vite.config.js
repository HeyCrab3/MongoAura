import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      Components({
          resolvers: [AntDesignVueResolver()],
      }),
  ],
    server: {
      port: 8080,
        open: true,
        http: true,
        ssr: false,
        // 设置代理
        proxy: {
          '/api': {
              target: 'http://127.0.0.1:7000',
              changeOrigin: true,
              rewrite: path => path.replace(/^\/api/, '')
          },
        }
  }
})
