<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <slot :games="games"></slot>
    <slot :foods="foods"></slot>
    <slot :books="books"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      foods: ["火锅", "麻辣烫", "啤酒鸭", "鱼香肉丝"],
      games: ["王者荣耀", "LOL", "绝地求生", "欢乐斗地主"],
      books: ["三国演义", "红楼梦", "西游记", "水浒传"],
    };
  },
};
</script>

<style>
.category {
  width: 300px;
  height: 600px;
}
</style>
