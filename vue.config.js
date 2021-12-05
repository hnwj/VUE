module.exports = {
  pages: {
    index: {
      //入口文件
      entry: "src/main.js",
    },
  },
  lintOnSave: false,
  //开启代理服务器
  //配置方式一
  // devServer: {
  //   proxy: "http://localhost:5000",
  // },

  // 多层服务器代理
  devServer: {
    proxy: {
      // /api请求前缀
      "/api": {
        target: "http://localhost:5000",
        //重写路径，去掉前面的api
        pathRewrite: { "^/api": "" },
        ws: true, //用于支持websocket
        changeOrigin: true, //用于控制请求头中的host的值
      },
      "/demo": {
        target: "http://localhost:5001",
        //重写路径，去掉前面的api
        pathRewrite: { "^/demo": "" },
        ws: true, //用于支持websocket
        changeOrigin: true, //用于控制请求头中的host的值
      },
    },
  },
};

