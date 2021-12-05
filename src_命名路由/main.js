import Vue from "vue";

import App from "./App.vue";

import router from './router/index'

//引入
import Vuerouter from "vue-router";
Vue.use(Vuerouter);

Vue.config.productionTip = false;

new Vue({
  el: "#root",
  render: (h) => h(App),
  router:router
});
