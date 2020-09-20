/**
 * Created by hcl on 2020/02/10
 */
import Vue from 'vue'

import ktable from './ktable.vue'
function plugin() {
  if (plugin.installed) {
    return
  }
  Vue.component('ktable', ktable)
}
export default plugin