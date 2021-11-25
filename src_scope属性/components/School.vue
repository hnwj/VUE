<template>
  <div class="demo">
    <h1 class="qwe">{{msg}}</h1>
    <h1>{{name}}</h1>
    <h1>{{address}}</h1>
    <h1>{{phone}}</h1>
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

<style scoped lang="less">
.demo{
  background-color: #ccc;
  color: blue;
}
</style>

// scope防止冲突