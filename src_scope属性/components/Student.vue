<template>
  <div class="demo">
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <h1>{{ sex }}</h1>
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
};
</script>

<style scoped>
  .demo{
    background-color: orange;
    color: green;
  }
</style>
