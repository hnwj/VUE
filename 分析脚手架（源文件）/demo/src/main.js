//引入Vue
import Vue from 'vue'
//引入app组件，app组件是所有组件的父组件
import App from './App.vue'

//关闭Vue生产提示
Vue.config.productionTip = false


new Vue({ 
  render: h => h(App),
}).$mount('#app')


// new Vue({
//   el:'#app',
//   render(createElement){
//    return createElement('h1','hello world');
//   }
// })