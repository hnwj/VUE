import Vue from "vue";
import App from "./App.vue";

Vue.prototype.x = { a: 2, b: 6 };

Vue.config.productionTip = false;
new Vue({
  el: "#root",
  render: (h) => h(App),
});
