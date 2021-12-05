<template>
  <div class="box">
    <Category title="美食">
      <img
        slot="center"
        src="https://img2.baidu.com/it/u=3274376584,1089397295&fm=26&fmt=auto"
      />
      <div class="foot" slot="footer">
        <a href="http://www.baidu.com">更多美食</a>
      </div>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://www.baidu.com">单机游戏</a>
        <a href="http://www.baidu.com">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video
        slot="center"
        controls
        src="https://www.runoob.com/try/demo_source/movie.mp4"
      ></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.baidu.com">经典</a>
          <a href="http://www.baidu.com">热门</a>
          <a href="http://www.baidu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
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
.box,
.foot {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>
