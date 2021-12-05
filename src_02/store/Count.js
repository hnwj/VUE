export default {
  namespaced: true,
  actions: {
    jia(context, value) {
      console.log("加被调用了", context, value);
      context.commit("JIA", value);
    },
    jian(context, value) {
      console.log("减被调用了", context, value);
      context.commit("JIAN", value);
    },
    jiaOdd(context, value) {
      console.log("加被调用了", context, value);
      if (context.state.sum % 2) {
        context.commit("JIA", value);
      }
    },
    jiaWait(context, value) {
      setTimeout(() => {
        context.commit("JIA", value);
      }, 500);
    },
  },
  mutations: {
    JIA(state, value) {
      console.log("mutations");
      state.sum += value;
    },
    JIAN(state, value) {
      console.log("mutations");
      state.sum -= value;
    },
  },
  state: {
    sum: 0,
    school: "北京大学",
    course: "web前端",
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
};
