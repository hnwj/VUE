import Vue from "vue";

import App from "./App.vue";

//引入Vue路由
import VueRouter from "vue-router";

import router from "./router/index";

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  el: "#root",
  render: (h) => h(App),
  router: router,
});
