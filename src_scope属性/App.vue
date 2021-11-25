<template>
  <div>
    <School></School>
    <hr />
    <Student></Student>
  </div>
</template>

<script>

import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  components: { School, Student },
};
</script>

<style lang="less">
.demo{
  color:#fff;
  .qwe{
font-size: 40px;
  }
}
</style>

