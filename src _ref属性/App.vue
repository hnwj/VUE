<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <School ref="sch"></School>
    <button @click="showDom">点我试试</button>
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "学习Vue！",
    };
  },
  components: { School },
  methods: {
    showDom(){
      console.log(this);
      console.log('***');
      console.log(this.$refs.title); //真实dom元素
      console.log(this.$refs.sch);   //shcool组件
    }
  },
};
</script>
