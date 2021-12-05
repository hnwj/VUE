<template>
  <div class="demo">
    <h1>学生姓名：{{name}}</h1>
    <h1>学生年龄：{{age}}</h1>
    <h1>学生性别：{{sex}}</h1>
    <button @click="sendSchool">把学生名给school组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'Student',
  data(){
    return{
      name:'张三',
      age:18,
      sex:'男'
    }
  },
  mounted() {
    
  },
  methods: {
    sendSchool(){
      // this.$bus.$emit('hello',123)
      //消息的发布
      pubsub.publish('hello',666)
    }
  },
}
</script>

<style scoped>
.demo{
  background-color: pink;
  color:green;
  font-size: 20px;
  padding: 20px;
}
</style>