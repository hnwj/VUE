<template>
  <div>
    <button @click="getStudents">获取学生数据</button>
    <button @click="getCars">获取汽车数据</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudents() {
      axios.get("http://localhost:8080/api/students").then(
        (response) => {
          console.log("请求成功了！", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
     getCars() {
      axios.get("http://localhost:8080/demo/Cars").then(
        (response) => {
          console.log("请求成功了！", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>

<style></style>
