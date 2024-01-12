import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { instance } from './axios/index.js'
import routers from './routers'

const app = createApp(App)
app.provide('axios',instance)
app.use(routers)  // router 추가
app.mount('#app')
