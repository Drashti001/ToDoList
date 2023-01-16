<template>
  <div id="app">
    <home-page></home-page>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
//import lists from "./todo.json";

export default {
  name: 'App',
  components: {
    'HomePage':HomePage
  }
}
</script>

<style scoped>

</style>
