//该文件用于配置路由
//引入组件
import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import News from "../pages/News";
import Detail from "../pages/Detail";
import VueRouter from "vue-router";

export default new VueRouter({
  routes: [
    {
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "news",
          component: News,
        },
        {
          path: "message",
          component: Message,
          children: [
            {
              name:'juti',
              path: "detail/:id/:title",   //使用占位符
              component: Detail,
              //props参数传递的一种写法，该对象所有的值都会以props的形式给Deatail组件
              // props:{a:1,b:2}

              // props的第二种写法,若布尔值为true,则把所有的params参数值都传递给组件detail
              // props:true

              //props的第三种写法,值为函数

              // props($route){
              //   return {id:$route.params.id,title:$route.params.title}
              // }
              props({params:{id,title}}){
                return {id,title}
              }
            },
          ],
        },
      ],
    },
  ],
});
