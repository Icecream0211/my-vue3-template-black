import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});

console.log(import.meta.env);
console.log(import.meta.env.VITE_APP_BASE_API);
console.log(import.meta.env.VITE_SERVE);
app.mount('#app');

//@ts-ignore  忽略ts校验
