<template>
  <div>
    <h3>当前求和:{{ sum }}</h3>
    <h3>当前放大10倍:{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ course }}</h3>
    <h3 style="color: blue">下方的总人数:{{ personList.length }}</h3>
    <select v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    /********************************/
    //借助mapState生成计算属性，从state中读取数据，对象写法
    // ...mapState({ sum: "sum", school: "school", course: "course" }),
    //简写方式
    ...mapState("countAbout", ["sum", "school", "course"]),
    ...mapState("personAbout", ["personList"]),
    // ...mapState(['countAbout','personAbout'])

    //详细写法
    // ...mapGetters({ bigSum: "bigSum" }),
    //简写方式
    ...mapGetters("countAbout", ["bigSum"]),
  },
  methods: {
    ...mapMutations("countAbout", { increment: "ADD", decrement: "REDUCE" }),
    // increment() {
    //   // this.$store.dispatch("add", this.n);
    //   this.$store.commit("ADD", this.n);
    // },
    // decrement() {
    //   // this.$store.dispatch("reduce", this.n);
    //   this.$store.commit("REDUCE", this.n);
    // },
    ...mapActions("countAbout", {
      incrementOdd: "addOdd",
      incrementWait: "addWait",
    }),
    // incrementOdd() {
    //   this.$store.dispatch("addOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("addWait", this.n);
    // },
  },
  mounted() {
    const x = mapState({ sum: "sum", school: "school", course: "course" });
    console.log(x);
  },
};
</script>

<style scoped></style>
