<template>
  <div>
    <h1>人员列表</h1>
    <h3>count组件求和为：{{ sum }}</h3>
    <h3>列表中第一个人的名字：{{ firstPerName }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addName">添加一些姓名</button>
    <ul>
      <li v-for="p in personList" :key="p.id">
        {{ p.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    // personList() {
    //   return this.$store.state.personList;
    ...mapState("Person", ["personList"]),
    ...mapState("Count", ["sum"]),
    ...mapGetters("Person", ["firstPerName"]),
    // },
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("Person/ADD_PERSON", personObj);
      this.name = "";
    },
    addWang() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("Person/addWang", personObj);
      this.name = "";
    },
    addName(){
      this.$store.dispatch("Person/addPersonServer")
    }
  },
};
</script>

<style></style>
