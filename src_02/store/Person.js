import axios from "axios";
import { nanoid } from "nanoid";
export default {
  namespaced: true,
  actions: {
    addWang(context, value) {
      if (value.name.indexOf("王") === 0) {
        context.commit("ADD_PERSON", value);
      } else {
        alert("添加的人必须姓王");
      }
    },
    addPersonServer(context) {
      axios.get("http://api.laifudao.com/open/xiaohua.json").then(
        (response) => {
          context.commit('ADD_PERSON', { id: nanoid(), name: response.data });
        },
        (error) => {
          alert(errpr.message);
        }
      );
    },
  },
  mutations: {
    ADD_PERSON(state, value) {
      console.log("mutations");
      state.personList.unshift(value);
    },
  },
  state: {
    personList: [{ id: "01", name: "tom" }],
  },
  getters: {
    firstPerName(state) {
      return state.personList[0].name;
    },
  },
};
