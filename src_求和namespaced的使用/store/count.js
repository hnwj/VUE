//求和功能的相关配置
export default {
  namespaced: true, //命名空间
  actions: {
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
  },
  mutations: {
    ADD(state, value) {
      // console.log("mutations", state, value);
      state.sum += value;
    },
    REDUCE(state, value) {
      state.sum -= value;
    },
  },
  state: {
    sum: 0,
    school: "北大",
    course: "Web前端",
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
};