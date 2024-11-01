import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
//第一，引入path;node平台引入的模块，可以获得文件夹路径
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    //第二，配置别名
    alias: {
      '@': path.resolve('./src'),
    },
  },
});
