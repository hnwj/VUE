<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 字符串的写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{
          m.title
        }}</router-link> -->
         <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{
          m.title
        }}</router-link> -->
        <!-- 对象的写法 -->
        <!-- <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
          >{{ m.title }}</router-link
        > -->

        <router-link
          :to="{
            name:'juti',
            //path: '/home/message/detail',
            params: {
              id: m.id,
              title: m.title,
            },
          }"
          >{{ m.title }}</router-link
        >
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
        { id: "01", title: "消息01" },
        { id: "02", title: "消息02" },
        { id: "03", title: "消息03" },
      ],
    };
  },
};
</script>

<style></style>
