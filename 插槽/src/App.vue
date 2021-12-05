<template>
  <div class="box">
    <Category title="美食">
      <template scope="foods">
        <img src="https://img-bss.csdn.net/1638250109562.png" alt="" />
        <ol>
          <li v-for="(f, index) in foods.foods" :key="index">{{ f }}</li>
        </ol>
        <div class="foot">
          <a href="http://www.baidu.com">更多美食</a>
          <a href="http://www.baidu.com">联系我们</a>
        </div>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="games">
        <img
          src="https://img.zcool.cn/community/01001c581aee98a84a0e282bf80b27.jpg@1280w_1l_2o_100sh.jpg"
          alt=""
        />
        <ul>
          <li v-for="(g, index) in games.games" :key="index">{{ g }}</li>
        </ul>
        <div class="foot" slot="footer">
          <a href="http://www.baidu.com">更多游戏</a>
          <a href="http://www.baidu.com">联系我们</a>
        </div>
      </template>
    </Category>
    <Category title="书名">
      <template scope="books">
        <img
          src="https://tse1-mm.cn.bing.net/th/id/R-C.28d8dca7a21eb72cc568869273cf9e28?rik=d9heqiEjhRrCBg&riu=http%3a%2f%2fwww.hnrdcy.com.cn%2fuploadfiles%2fpictures%2fnews%2f20201029145433_1379.jpg&ehk=6wE9K4PH48KNTFyIIuMFaO1Ti0MyaaEGRtU9%2b7W%2beLY%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          slot="center"
        />
        <h4 v-for="(b, index) in books.books" :key="index">{{ b }}</h4>
        <div class="foot">
          <a href="http://www.baidu.com">经典</a>
          <a href="http://www.baidu.com">热门</a>
          <a href="http://www.baidu.com">推荐</a>
        </div>
        <h4>欢迎前来观看</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
};
</script>
<style>
.box {
  display: flex;
  justify-content: space-around;
}
img {
  width: 200px;
  height: 200px;
}
.foot {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
</style>
