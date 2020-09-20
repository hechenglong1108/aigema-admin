import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.less'
// 引入公共样式
import './assets/css/reset.less'
// 导入 element 组件库
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'
import Ktable from '@/components/ktable'


Vue.use(Element)
Vue.use(Ktable)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
