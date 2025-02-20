import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from "./router/route.ts";
import "element-plus/dist/index.css"
import './assets/css/common.less'
import './assets/css/layout.less'
import './assets/css/font.less'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
