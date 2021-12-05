//人员求和统计功能
import axios from "axios";
import { nanoid } from "nanoid";
export default {
  namespaced: true, //命名空间
  actions: {
    addPersonWang(context, value) {
      if (value.name.indexOf("王") === 0) {
        context.commit("ADD_PERSON", value);
      } else {
        alert("添加的人必须姓王！！！");
      }
    },
    addPersonServer(context) {
      axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
        (response) => {
          context.commit("ADD_PERSON", { id: nanoid(), name: response.data });
        },
        (error) => {
          alert(error.message);
        }
      );
    },
  },
  mutations: {
    ADD_PERSON(state, value) {
      console.log(state, value);
      if (value.name !== "") {
        state.personList.unshift(value);
      } else {
        alert("添加不能为空！！!");
      }
    },
  },
  state: {
    personList: [
      {
        id: "01",
        name: "张三",
      },
    ],
  },
  getters: {
    firstPersonName(state) {
      return state.personList[0].name;
    },
  },
};
