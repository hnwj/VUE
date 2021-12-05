<template>
  <div class="app">
    <!-- 通过父组件给子组件传递函数props实现 -->
    <School :getSchoolName="getSchoolName"></School>
    <hr />
    <!-- 绑定一个自定义事件实现子给父亲传递数据 -->
    <!-- <Student v-on:atiguigu="getStudentName"></Student> -->
    <Student @atiguigu="getStudentName" @test="test1"></Student>

    <!-- 通过父组件给子组件绑定一个自定义事件实现，子给父传递数据，使用ref -->
    <!-- @click.navtive是原生事件，native是标识原生  -->
    <!-- <Student ref="student" @click.native="demo"></Student> -->
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  components: { School, Student },
  methods: {
    getSchoolName(name) {
      console.log("**", name);
    },
    getStudentName(name, ...param) {
      console.log("&&", name, param);
    },
    test1() {
      console.log("test!!!!");
    },
    demo() {
      alert("hello!!!");
    },
  },
  mounted() {
    // this.$refs.student.$on("atiguigu", this.getStudentName); 绑定自定义事件
    // this.$refs.student.$once("atiguigu", this.getStudentName); 绑定自定义事件（一次性）
  },
};
</script>

<style lang="less">
.app {
  color: #fff;
  background-color: pink;
  padding: 30px;
}
</style>
