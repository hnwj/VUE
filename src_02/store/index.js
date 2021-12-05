import Vue from "vue";
import countOptions from "./Count";
import personOptions from "./Person";
import Vuex from "Vuex";
Vue.use(Vuex);

//求和功能配置
// const countOptions = {
//   namespaced: true,
//   actions: {
//     jia(context, value) {
//       console.log("加被调用了", context, value);
//       context.commit("JIA", value);
//     },
//     jian(context, value) {
//       console.log("减被调用了", context, value);
//       context.commit("JIAN", value);
//     },
//     jiaOdd(context, value) {
//       console.log("加被调用了", context, value);
//       if (context.state.sum % 2) {
//         context.commit("JIA", value);
//       }
//     },
//     jiaWait(context, value) {
//       setTimeout(() => {
//         context.commit("JIA", value);
//       }, 500);
//     },
//   },
//   mutations: {
//     JIA(state, value) {
//       console.log("mutations");
//       state.sum += value;
//     },
//     JIAN(state, value) {
//       console.log("mutations");
//       state.sum -= value;
//     },
//   },
//   state: {
//     sum: 0,
//     school: "北京大学",
//     course: "web前端",
//   },
//   getters: {
//     bigSum(state) {
//       return state.sum * 10;
//     },
//   },
// };

// //人员添加功能配置
// const personOptions = {
//   namespaced: true,
//   actions: {
//     addWang(context, value) {
//       if (value.name.indexOf("王") === 0) {
//         context.commit("ADD_PERSON", value);
//       } else {
//         alert("添加的人必须姓王");
//       }
//     },
//   },
//   mutations: {
//     ADD_PERSON(state, value) {
//       console.log("mutations");
//       state.personList.unshift(value);
//     },
//   },
//   state: {
//     personList: [{ id: "01", name: "tom" }],
//   },
//   getters: {
//     firstPerName(state) {
//       return state.personList[0].name;
//     },
//   },
// };

//判断业务逻辑
//const actions = {
// jia(context, value) {
//   console.log("加被调用了", context, value);
//   context.commit("JIA", value);
// },
// jian(context, value) {
//   console.log("减被调用了", context, value);
//   context.commit("JIAN", value);
// },
// jiaOdd(context, value) {
//   console.log("加被调用了", context, value);
//   if (context.state.sum % 2) {
//     context.commit("JIA", value);
//   }
// },
// jiaWait(context, value) {
//   setTimeout(() => {
//     context.commit("JIA", value);
//   }, 500);
// },
//};
//对数据进行操作
// const mutations = {
//   JIA(state, value) {
//     console.log("mutations");
//     state.sum += value;
//   },
//   JIAN(state, value) {
//     console.log("mutations");
//     state.sum -= value;
//   },
//   ADD_PERSON(state, value) {
//     console.log("mutations");
//     state.personList.unshift(value);
//   },
// };

//存储数据
// const state = {
//   sum: 0,
//   school: "北京大学",
//   course: "web前端",
//   personList: [{ id: "01", name: "tom" }],
// };

// //对数据state进行加工
// const getters = {
//   bigSum(state) {
//     return state.sum * 10;
//   },
// };

//创建并暴露
// export default new Vuex.Store({
//   actions,
//   mutations,
//   state,
//   getters,
// });

export default new Vuex.Store({
  modules: {
    Count: countOptions,
    Person: personOptions,
  },
});
