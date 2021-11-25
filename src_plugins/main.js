import Vue  from 'vue'
import App from './App.vue'

//引入插件
import plugins from './plugins'

//使用插件
Vue.use(plugins,2,5,8)

Vue.config.productionTip=false
new Vue({
  el:'#root',
  render:h=>h(App)
})