<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <button @click="showMsg">点我试试</button>
  </div>
</template>

<style scoped>
/* 组件的样式 */
.demo {
  color: orange;
}
</style>

<script>
export default Vue.extend({
  name:'Student',
  data() {
    return {
      name: "张三",
      age:18,
    };
  },
  methods: {
    showMsg() {
      console.log("你好!"+this.name);
    },
  },
});
</script>
