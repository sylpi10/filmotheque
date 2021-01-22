<template>
    <div class="skeleton">
     <Header>
        <template v-slot:pageTitle >
                <h1 class="title">
                    {{pageTitle}}
                </h1>
        </template>
     </Header>
      <hr>
        <Movies>
        </Movies>    
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Movies from "../components/Movies.vue";
export default {
    name: "Skeleton",
     components: {
      Header, Movies
    },
  data(){
      return{
          pageTitle: "Home"
      }
  }

}
</script>


<style lang="scss">
    .title{
        margin-top: 80px;
    }
 </style> 

