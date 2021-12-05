//该文件用于创建vuex中核心的store
import Vue from "vue";
import Vuex from "vuex";
import countOptions from "./count"
import personOptions from "./person"
Vue.use(Vuex);




//准备actions用于响应组件的动作
// const actions = {
// };

//用于操作数据
// const mutations = {};

//用于存储数据
// const state = {
// };

// const getters = {

// };

//导出store
//用于创建store
export default new Vuex.Store({
  // actions: actions,
  // mutations: mutations,
  // state: state,
  // getters: getters,
  modules: {
    countAbout: countOptions,
    personAbout: personOptions,
  },
});
