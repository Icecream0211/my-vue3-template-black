import { createApp } from 'vue';
//SVG插件需要配置的代码
import 'virtual:svg-icons-register';
import App from './App.vue';
import gloalComponent from '@/components/index.ts';

console.log(import.meta.env);
console.log(import.meta.env.VITE_APP_BASE_API); // "123"
console.log(import.meta.env.VITE_SERVE); // undefined

const app = createApp(App);
app.use(gloalComponent);
//引入模板全局样式
import '@/styles/index.scss';
app.mount('#app');
