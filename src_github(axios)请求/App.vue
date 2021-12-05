<template>
  <div>
    <div id="app">
      <div class="container">
        <Search />
        <List />
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import List from "./components/List.vue";
export default {
  name: "App",
  components: { Search, List },
};
</script>

<style></style>
