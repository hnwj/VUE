<template>
  <div class="box">
    <Category title="美食">
      <img src="https://img2.baidu.com/it/u=3274376584,1089397295&fm=26&fmt=auto" />
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video controls src="https://www.runoob.com/try/demo_source/movie.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      films: ["《你好，李焕英》", "《长津湖》", "《战狼2》", "《拆弹专家2》"],
      games: ["英雄联盟", "绝地求生", "王者荣耀", "欢乐斗地主"],
    };
  },
};
</script>

<style scoped>
.box {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video{
  width: 100%;
}
</style>
