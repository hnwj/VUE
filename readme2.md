项目的配置
1、浏览器自动打开项目
---package.json
"scripts": {
    "serve": "vue-cli-service serve  --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },

  2、关闭语法检查
  在根目录下建立一个vue.config.js
  module.exports = {
     lintOnsave: false, //关闭语法检查
  }

  src文件夹的简写方式
  