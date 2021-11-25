import Vue  from 'vue'
import App from './App.vue'
import {mixin} from './mixin'  //全局混入

Vue.config.productionTip=false
Vue.mixin(mixin)
new Vue({
  el:'#root',
  render:h=>h(App)
})