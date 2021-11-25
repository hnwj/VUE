<template>
  <div class="demo">
    <h1>学校名称：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "北京大学",
      address: "北京",
    };
  },
};
</script>

<style scoped>
.demo {
  background-color: skyblue;
  color: orangered;
  font-size: 25px;
  padding: 20px;
}
</style>