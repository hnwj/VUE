<template>
  <div class="Category">
    <h3>{{title}}</h3>
    <slot name="center">我是默认值，当使用者没有传递时，显示</slot>
    <slot name="footer">我是默认值，当使用者没有传递时，显示</slot>
    <!-- <ul>
      <li v-for="(item,index) in listData" :key="index">{{item}}</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
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
