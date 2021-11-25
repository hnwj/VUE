<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <h1>{{ sex }}</h1>
    <input type="text" name="" id="" v-fbind:value="name">
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

