import { createApp } from 'vue';
//SVG插件需要配置的代码
import 'virtual:svg-icons-register';
import App from './App.vue';

import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import gloalComponent from '@/components/index.ts';

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(gloalComponent);

//引入模板全局样式
import '@/styles/index.scss';
console.log(import.meta.env);
console.log(import.meta.env.VITE_APP_BASE_API);
console.log(import.meta.env.VITE_SERVE);
app.mount('#app');

//@ts-ignore  忽略ts校验
