import { defineConfig, UserConfigExport, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
//第一，引入path;node平台引入的模块，可以获得文件夹路径
// @ts-ignore
import path from 'path';

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve', //保证开发阶段可以使用mock接口
        enable: true,
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    //scss全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
    resolve: {
      //第二，配置别名
      alias: {
        '@': path.resolve('./src'),
      },
    },
    //和后端真实接口联调的时候打开，调试阶段使用mock接口
    // server: {
    //   // 配置代理,可以配置多个地址
    //   proxy: {
    //     '/api': {
    //       target: 'http://localhost:3000',
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, ''),
    //     },
    //     '/cci': {
    //       target: 'ws://localhost:3000',
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/cci/, ''),
    //     },
    //     '/ws': {
    //       target: 'ws://localhost:3000',
    //       changeOrigin: true,
    //     },
    //   },
    // },
  };
};
