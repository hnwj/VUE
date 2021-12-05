import Vue from "vue";

import App from "./App.vue";

import router from "./router/index";

//引入elelmentsUI组件库

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";



//引入
import Vuerouter from "vue-router";
Vue.use(Vuerouter);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  el: "#root",
  render: (h) => h(App),
  router: router,
});
