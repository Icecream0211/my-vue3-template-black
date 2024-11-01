import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
//第一，引入path;node平台引入的模块，可以获得文件夹路径
// @ts-ignore
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  resolve: {
    //第二，配置别名
    alias: {
      '@': path.resolve('./src'),
    },
  },
  server: {
    // 配置代理,可以配置多个地址
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/cci': {
        target: 'ws://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cci/, ''),
      },
      '/ws': {
        target: 'ws://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});
