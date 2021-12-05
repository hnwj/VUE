import Vue from "vue";

import App from "./App.vue";

import router from "./router/index";

//按需引入
import { Row, Button, Breadcrumb} from "element-ui";

//引入elelmentsUI组件库
//完整的引入
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";

//按需组件注册
Vue.component("el-row", Row);
Vue.component("el-button", Button);
Vue.component("el-breadcrumb", Breadcrumb);


//引入
import Vuerouter from "vue-router";
Vue.use(Vuerouter);
// Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  el: "#root",
  render: (h) => h(App),
  router: router,
});
