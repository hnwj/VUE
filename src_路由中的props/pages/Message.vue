<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带param参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`"> 
          {{
            m.title
          }}
        </router-link>&nbsp;&nbsp; -->
        <!-- 跳转路由并携带query参数，to的对象写法 -->
        <router-link
          :to="{
            // path:'/home/message/detail',  //如采用的是params传递参数，则不能使用path,，必须用name
            name: 'juti', //name这里要写单引号！！！,外双内单
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >{{ m.title }}</router-link>&nbsp;&nbsp;
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "01", title: "消息1" },
        { id: "02", title: "消息2" },
        { id: "03", title: "消息3" },
      ],
    };
  },
};
</script>

<style></style>
