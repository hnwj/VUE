<template>
  <div class="student">
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <h1>{{ sex }}</h1>
    <button @click="add">点我年龄加1</button>
    <button @click="sendStudentName">打印学生名字</button>
    <button @click="unbind">解绑atiguigu事件</button>
    <button @click="death">点我销毁student组件实例</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 18,
      sex: "男",
    };
  },
  methods: {
    add() {
      this.age++;
    },
    sendStudentName() {
      //触发student组件上的
      this.$emit("atiguigu", this.name, 100, 200, 300);
      this.$emit("test");
      this.$emit("demo")
    },
    unbind() {
      // this.$off('atiguigu') //解绑一个自定义事件
      // this.$off(['atiguigu','test1'])   //解绑多个事件
      this.$off(); //所有的事件被解绑
    },
    death() {
      this.$destroy(); //销毁了当前student组件的实例，销毁后所有的student
    },
  },
};
</script>

<style scoped>
.student {
  background-color: orange;
  color: green;
  padding: 30px;
}
</style>
