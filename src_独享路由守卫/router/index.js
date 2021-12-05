//路由器的配置
import VueRouter from "vue-router";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

//创建并暴露
const router = new VueRouter({
  routes: [
    {
      name: "guanyu",
      path: "/about",
      component: About,
      meta: { title: "关于" },
    },
    {
      name: "zhuye",
      path: "/home",
      component: Home,
      meta: { title: "主页" },
      //多级路由的配置
      children: [
        {
          name: "xinwen",
          path: "news", //这里不要写/
          component: News,
          meta: { isAuth: false, title: "新闻" },
        },
        {
          name: "xiaoxi",
          path: "message",
          component: Message,
          meta: { isAuth: true, title: "消息" },
          //独享路由守卫
          beforeEnter: (to, from,next) => {
            console.log("前置路由守卫", to, from);
            // document.title = to.meta.title || "硅谷系统";
            if (to.meta.isAuth) {
              //判断是否需要修复
              if (localStorage.getItem("school") === "atguigu") {
                next();
              } else {
                alert("学校名称不对，无权查看！");
              }
            } else {
              next();
            }
          },
          children: [
            {
              name: "juti",
              path: "detail/:id/:title",
              component: Detail,
              meta: { isAuth: false, title: "详情" },
              //props的第一种,值为对象
              // props: {
              //   a: 1,
              //   b: "hello",
              // },

              //若props为true,则接受params所有的参数
              // props: true,

              //props第第三种写法
              props($route) {
                return { id: $route.query.id, title: $route.query.title };
              },
            },
          ],
        },
      ],
    },
  ],
});

//全局前置路由守卫---初始化时候被调用
// router.beforeEach((to, from, next) => {
//   console.log("前置路由守卫", to, from);
//   document.title=to.meta.title || '硅谷系统'
//   if (to.meta.isAuth) {
//     //判断是否需要修复
//     if (localStorage.getItem("school") === "atguigu") {
//       next();
//     } else {
//       alert("学校名称不对，无权查看！");
//     }
//   } else {
//     next();
//   }
// });

//后置路由
router.afterEach((to, from) => {
  document.title = to.meta.title || "硅谷系统";
  console.log("后置路由守卫", to, from, next);
});

export default router;
