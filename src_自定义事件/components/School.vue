<template>
  <div class="school">
    <h1>{{msg}}</h1>
    <h1>{{name}}</h1>
    <h1>{{address}}</h1>
    <h1>{{phone}}</h1>
    <button @click="sendSchoolName">打印学校名字</button>
  </div>
</template>

<script>
export default {
name:'School',
props:['getSchoolName'],
data() {
  return {
    msg: "学习Vue！",
    name:'清华大学tsinghua',
    address:'北京',
    phone:'11112'
  }
},
methods: {
  sendSchoolName(){
    this.getSchoolName(this.name)
  }
},
 
}
</script>

<style scoped lang="less">
.school{
  background-color: #ccc;
  color: blue;
  padding: 30px;
}
</style>

// scope防止冲突