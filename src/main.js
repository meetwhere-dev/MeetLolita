import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper /* { default options with global component } */)

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    nav: [
      {
        path: '/Home',
        name: '主页',
        hue: 255
      },
      {
        path: '/About',
        name: '关于',
        hue: 200
      },
      {
        path: '/Range',
        name: '排名',
        hue: 115
      },
      {
        path: '/Forums',
        name: '测试',
        hue: 333
      },
      {
        path: '/Shop',
        name: '测试',
        hue: 20
      },
      {
        path: '/Help',
        name: '帮助',
        hue: 45
      }
    ]
  }
})
// axios.defaults.baseUrl = 'http://localhost/'
axios.defaults.withCredentials = true
axios.interceptors.request.use(config => {
  console.log(config)
  return config
})
Vue.config.productionTip = false
Vue.prototype.$axios = axios
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
