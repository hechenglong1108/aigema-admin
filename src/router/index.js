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
        path: '/',
        redirect: '/banner'
      },
      {
        path: '/banner',
        name: 'banner',
        component: () => import( '@/views/banner/index'),
        meta:{
          active: '/banner'
        }
      },
      {
        path: '/banner/add',
        name: 'banner',
        component: () => import( '@/views/banner/add.vue'),
        meta:{
          active: '/banner'
        }
      },
      {
        path: '/user',
        name: 'user',
        component: () => import( '@/views/user/index'),
        meta:{
          active: '/user'
        }
      },
      {
        path: '/user/detail',
        name: 'detail',
        component: () => import( '@/views/user/detail.vue'),
        meta:{
          active: '/user'
        }
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import( '@/views/goods/index'),
        meta:{
          active: '/goods'
        }
      },
      {
        path: '/goods/add',
        name: 'goods',
        component: () => import( '@/views/goods/add.vue'),
        meta:{
          active: '/goods'
        }
      },
      {
        path: '/order',
        name: 'order',
        component: () => import( '@/views/order/index'),
        meta:{
          active: '/order'
        }
      }
      ,
      {
        path: '/order/detail',
        name: 'order',
        component: () => import( '@/views/order/detail'),
        meta:{
          active: '/order'
        }
      }
      ,
      {
        path: '/luckDraw',
        name: 'luckDraw',
        component: () => import( '@/views/luckDraw/index'),
        meta:{
          active: '/luckDraw'
        }
      },
      {
        path: '/prize',
        name: 'prize',
        component: () => import( '@/views/luckDraw/prize'),
        meta:{
          active: '/prize'
        }
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
