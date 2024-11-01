import { createApp } from 'vue';
import App from './App.vue';

console.log(import.meta.env);
console.log(import.meta.env.VITE_APP_BASE_API); // "123"
console.log(import.meta.env.VITE_SERVE); // undefined


//SVG插件需要配置的代码
import 'virtual:svg-icons-register';

createApp(App).mount('#app');
