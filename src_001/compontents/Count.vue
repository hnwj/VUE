<template>
  <div>
    <h1>当前求和为：{{ n }}</h1>
    <h3>我在{{ school }}，学习{{ course }}</h3>
    <select>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button>和为奇数时加</button>
    <button>等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n: 0,
      school: "北大",
      course: "web前端",
    };
  },
  methods:{

  }
};
</script>

<style>
</style>