//路由器的配置
import VueRouter from "vue-router";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

//创建并暴露
export default new VueRouter({
  routes: [
    {
      name: "guanyu",
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
      //多级路由的配置
      children: [
        {
          path: "news", //这里不要写/
          component: News,
        },
        {
          path: "message",
          component: Message,
          children: [
            {
              name: "juti",
              path: "detail/:id/:title",
              component: Detail,
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