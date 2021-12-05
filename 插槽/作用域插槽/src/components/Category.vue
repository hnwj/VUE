<template>
  <div class="Category">
    <h3>{{ title }}</h3>
    <slot :games="games">默认</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["英雄联盟", "绝地求生", "王者荣耀", "欢乐斗地主"],
    };
  },
};
</script>

<style scoped>
.Category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  background-color: orange;
  text-align: center;
}
</style>
