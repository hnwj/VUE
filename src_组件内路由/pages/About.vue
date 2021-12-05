<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
     document.title = to.meta.title || "硅谷系统";
    if (to.meta.isAuth) {
     
      if (localStorage.getItem("school") === "atguigu") {
        next();
      } else {
        alert("学校名称不对，无权查看！");
      }
    } else {
      next();
    }
  },
  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    // ...
    next();
  },
};
</script>

<style></style>
