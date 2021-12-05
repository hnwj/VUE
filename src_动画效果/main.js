//导入Vue
import Vue from "vue";
//导入App组件
import App from "./App.vue";

//关闭提示
Vue.config.productionTip = false;

//创建一个Vue对象
new Vue({
  el: "#root",
  render: (h) => h(App),
});
