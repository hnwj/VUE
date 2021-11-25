<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h1>{{ name }}</h1>
    <h1>{{ address }}</h1>
    <button @click="showMsg">点我试试</button>
  </div>
</template>

<style scoped>
/* 组件的样式 */
.demo {
  color: blue;
}
</style>

<script>
export default Vue.extend({
  name:'School',
  data() {
    return {
      name: "北京大学",
      address: "北京市",
    };
  },
  methods: {
    showMsg() {
      console.log("你好！Vue");
    },
  },
});
</script>
