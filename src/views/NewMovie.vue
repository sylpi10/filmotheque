<template>
  <div class="add">
     <Skeleton msg="Add A Movie">
    </Skeleton>
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from "axios";
// import Movie from "../components/Movie.vue";
import Skeleton from "../components/Skeleton.vue";
export default {
  name: "NewMovie",
  components: {
     Skeleton
  },
  data(){
    return {
    
    };
  },

};
</script>
