import { createApp } from 'vue';
import App from './App.vue';


console.log(import.meta.env);
console.log(import.meta.env.VITE_APP_BASE_API) // "123"
console.log(import.meta.env.VITE_SERVE) // undefined


createApp(App).mount('#app');
