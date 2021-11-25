<template>
  <div>
    <h1 @click="showName">{{ name }}</h1>
    <h1>{{ age }}</h1>
    <h1>{{ sex }}</h1>
  </div>
</template>

<script>
// import { mixin } from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 18,
      sex: "男",
    };
  },
  // mixins: [mixin],
};
</script>

