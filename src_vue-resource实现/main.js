//引入vue
import Vue from "vue";
//引入App组件
import App from "./App.vue";
//导入插件
import vueResource from "vue-resource";
//使用插件
Vue.use(vueResource)

Vue.config.productionTip = false;

new Vue({
  el: "#root",
  render: (h) => h(App),
    beforeCreate() {
      Vue.prototype.$bus = this;
  },
});
