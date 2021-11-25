<template>
  <div class="demo">
    <h1>学生姓名：{{name}}</h1>
    <h1>学生年龄：{{age}}</h1>
    <h1>学生性别：{{sex}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data(){
    return{
      name:'张三',
      age:18,
      sex:'男'
    }
  }
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