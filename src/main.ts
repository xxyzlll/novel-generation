import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/route.ts";
import './assets/css/common.less'
import './assets/css/layout.less'
import './assets/css/font.less'

createApp(App).use(router).mount('#app')
