import Vue from 'vue'
import App from './App.vue'
// 路由
import router from './router'
import store from './store'
// element-ui组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// ant design组件库
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// 全局样式表
import './assets/css/global.css'
// 封装axios
import requests from './utils/requests'

// 网络请求包
import axios from 'axios'
// 配置请求根路径
axios.defaults.baseURL = 'localhost/'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Antd)
Vue.prototype.$requests = requests
Vue.prototype.$axios = axios

// 中转站传值
// const eventbus = new Vue()
// Vue.prototype.eventbus = eventbus

new Vue({
  router,
  store,
  data: {
    Bus: new Vue()
  },
  render: h => h(App)
}).$mount('#app')
