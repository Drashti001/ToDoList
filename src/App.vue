<template>
  <div id="app">
    <!-- <to-do-edit></to-do-edit> -->
    <!--<to-do-add></to-do-add>-->
   <router-view></router-view> 
   <!-- <to-do-home></to-do-home> -->
 <!-- <login-page></login-page> 
   -->
  
   
  </div>
</template>

<script>
//import LoginPage from './components/LoginPage.vue';
//import  route  from './routes.js';
//import HomePage from './components/HomePage.vue';
//import ToDoAdd from './components/ToDoAdd.vue';

//import ToDoEdit from './components/ToDoEdit.vue';

export default {
  name: 'App',
  components: {

    //'to-do-edit':ToDoEdit
   // 'to-do-home':HomePage,
    //'ToDoAdd':ToDoAdd,
   // 'PageNotFound':PageNotFound
   //'login-page':LoginPage
  }
}
</script>

<style scoped>

</style>
