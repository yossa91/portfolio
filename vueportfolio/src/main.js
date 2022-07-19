import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router/router.js'
import '../src/assets/css/reset.css'


const app  = createApp(App);
app.use(router)
app.mount('#app')