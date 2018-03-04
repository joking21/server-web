import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import './assets/css/base.css'
import './main.scss'
Vue.config.debug = true;//开启错误提示

new Vue({
        router,
        el: '#app',
        render: h => h(App)
})