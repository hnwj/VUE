<template>
  <div>
    <h3>当前求和为:{{ sum }}</h3>
    <h3>放大10倍后的数字:{{ bigSum }}</h3>
    <h3>我在{{ school }},{{ course }}</h3>
    <h3>人员数量：{{personList.length}}</h3>
    <!-- v-model.number 是将字符串强制转换为数值类型 -->
    <select name id v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前为奇数时再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // 程序员自己写的方法实现
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // course() {
    //   return this.$store.state.course;
    // },

    // ...mapState({ sum: "sum", schol: "school", course: "course" }),
    ...mapState('Count',["sum", "school", "course","personList"]),
    ...mapState('Person',["personList"]),

    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
    ...mapGetters("Count",{ bigSum: "bigSum" }),
    // ...mapGetters(['bigSum'])
  },
  methods: {
    ...mapMutations("Count",{ increment: "JIA", decrement: "JIAN" }),
    // ...mapMutations(['JIA','JIAN']),
    // increment() {
    //   this.$store.commit("JIA", this.n);
    // },
    // decrement() {
    //   this.$store.commit("JIAN", this.n);
    // },
    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // incrementWait() {
    //   setTimeout(() => {
    //     this.$store.dispatch("jiaWait", this.n);
    //   }, 500);
    // },

    ...mapActions("Count",{ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
  },
};
</script>

<style></style>
