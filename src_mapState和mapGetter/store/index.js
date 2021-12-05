//该文件用于创建vuex中核心的store
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//准备actions用于响应组件的动作
const actions = {
  // add:function(){}
  // add(context, value) {
  //   // console.log("actions加法被调用了", context, value);
  //   context.commit("ADD", value);
  // },
  // reduce(context, value) {
  //   context.commit("REDECE", value);
  // },
  addOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit("ADD", value);
    }
  },
  addWait(context, value) {
    setTimeout(() => {
      context.commit("ADD", value);
    }, 500);
  },
};

//用于操作数据
const mutations = {
  ADD(state, value) {
    // console.log("mutations", state, value);
    state.sum += value;
  },
  REDUCE(state, value) {
    state.sum -= value;
  },
};

//用于存储数据
const state = {
  sum: 0,
  school: "北大",
  course:'Web前端'
};

const getters = {
  bigSum(state) {
    return state.sum * 10;
  },
};

//导出store
//用于创建store
export default new Vuex.Store({
  actions: actions,
  mutations: mutations,
  state: state,
  getters: getters,
});
