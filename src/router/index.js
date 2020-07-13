import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Range from '../views/Range.vue'
// import About from '../views/About.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '主页'
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      title: '主页'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: About

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '关于'
    }
  },
  {
    path: '/range',
    name: 'Range',
    component: Range,
    meta: {
      title: '排名'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
