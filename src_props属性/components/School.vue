<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h1>{{name}}</h1>
    <h1>{{address}}</h1>
    <h1>{{myPhone+1}}</h1>
    <button @click="changePho">点我试试</button>
  </div>
</template>

<script>
export default {
name:'School',
data() {
  return {
    msg: "学习Vue！",
    myPhone:this.phone
  }
},
methods: {
  changePho(){
    this.myPhone++
  }
},
// props:['name','address','phone']//简单接收
  // props:{
  //   name:String,
  //   phone:Number,
  //   address:String
  // }

//接受的时候对数据进行类型限制
  props:{
    name:{
      type:String,   //类型为字符串
      required:true, //必须的
    
    },
    address:{
      type:String,
      required:true
    },
    phone:{
      type:Number,
      required:true,
      default:111 //默认的
    }
  }
}
</script>

<style>
.demo{
  background-color: #ccc;
  color: blue;
}
</style>