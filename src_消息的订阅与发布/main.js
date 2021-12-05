import Vue from "vue";
import App from "./App.vue";

// const Demo = Vue.extend({});
// const d = new Demo();
// Vue.prototype.x = d;

Vue.config.productionTip = false;

new Vue({
  el: "#root",
  render: (h) => h(App),
});
