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
  mounted() {
    console.log("School", this);
    this.$bus.$on("hello", (data) => {
      console.log("我是School组件，收到了数据", data);
    });
  },
  beforeDestroy() {
    this.$bus.$off("hello");
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