import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import LazyLoad from '@/lib/lazyLoad'

const app = createApp(App)

app.directive('lazyload', LazyLoad)

app.use(router)

app.mount('#app')
