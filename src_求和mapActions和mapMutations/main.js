import Vue from "vue";

import App from "./App.vue";

//引入插件
import vueResource from "vue-resource";
//使用插件
Vue.use(vueResource);

//引入vuex
import Vuex from "vuex";
import store from "./store/index";
Vue.use(Vuex);

new Vue({
  el: "#root",
  render: (h) => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
});
