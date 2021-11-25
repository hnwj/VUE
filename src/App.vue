<template>
  <div>
    <School></School>
    <hr>
    <Student></Student>
  </div>
</template>

<script>
import School from "./compontents/School.vue";
import Student from "./compontents/Student.vue";
export default {
    components: { School, Student }
}
</script>

<style>
div{
  margin: 25px;
}
</style>