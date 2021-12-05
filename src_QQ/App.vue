<template>
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "./pages/Header.vue";
import Content from "./pages/Content.vue";
import Footer from "./pages/Footer.vue";
export default {
  name: "App",
  components: { Header, Content, Footer },
};
</script>

<style>
</style>