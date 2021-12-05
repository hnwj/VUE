<template>
  <!-- header开始 -->
  <div class="header">
    <div class="logo_img">
      <img
        src="https://rescdn.qqmail.com/zh_CN/htmledition/images/webp/logo/qqmail/qqmail_logo_default_35h206ff1.png"
      />
    </div>
    <div class="header_menu">
      <ul>
        <li><a href="#">基本版&nbsp;&nbsp;|</a></li>
        <li><a href="https://en.mail.qq.com/">English&nbsp;&nbsp;|</a></li>
        <li><a href="https://app.mail.qq.com/">手机版&nbsp;&nbsp;|</a></li>
        <li><a href="https://exmail.qq.com/?referrer=index_top">企业邮箱</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  width: 1536px;
  height: 63px;
  background-color: #eff4fa;
  position: relative;
}
img {
  margin-top: 15px;
  margin-left: 45px;
}
li {
  list-style: none;
}
.header_menu {
  position: absolute;
  right: 55px;
  top: 25px;
}
.header_menu li {
  float: left;
  padding-left: 10px;
  font-size: 12px;
}
.header_menu li a:hover {
  text-decoration: underline;
}
</style>
