<template>
  <div id="app">
    <router-view />
  </div>
</template>

// <script>
//   import {mapActions} from "vuex";

//   export default{
//     name: "App",

//     methods: {
//       ...mapActions(["fetchMovies"]),
//     }
//   }
// </script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html, body{
  padding: 0;margin: 0;box-sizing: border-box;
}
</style>
