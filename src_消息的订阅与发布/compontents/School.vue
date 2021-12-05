<template>
  <div class="demo">
    <h1>学校名称：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      name: "北京大学",
      address: "北京",
    };
  },
  methods: {
    demo(msgName, data) {
      console.log("有人发布了hello消息，hello消息回调被执行了...", msgName,data,this);
    },
  },
  mounted() {
    console.log("School", this);
    // this.$bus.$on("hello", (data) => {
    //   console.log("我是School组件，收到了数据", data);
    // });

    //消息的订阅
    this.pubid = pubsub.subscribe("hello", this.demo);
  },
  beforeDestroy() {
    // this.$bus.$off("hello");
    //消息的销毁
    pubsub.unsubscribe(this.pubid);
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
