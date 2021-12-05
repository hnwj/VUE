//导入Vue
import Vue from "vue";
//导入App组件
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#root",
  render: (h) => h(App),
});
