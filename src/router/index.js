import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/user',
        name: 'user',
        component: () => import( '@/views/user/index'),
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import( '@/views/goods/index'),
      },
      {
        path: '/order',
        name: 'order',
        component: () => import( '@/views/order/index'),
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
