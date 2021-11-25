<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h1>{{name| mySlice()}}</h1>
    <h1>{{address}}</h1>
    <h1>{{phone}}</h1>
    <button @click="hello">点我试试看</button>
  </div>
</template>

<script>
export default {
name:'School',
data() {
  return {
    msg: "学习Vue！",
    name:'清华大学tsinghua',
    address:'北京',
    phone:'11112'
  }
},
 
}
</script>

<style>
.demo{
  background-color: #ccc;
  color: blue;
}
</style>