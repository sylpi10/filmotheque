<template>
  <div class="add">
     <Skeleton msg="Add A Movie">
    </Skeleton>
    <hr>
<InputWithError></InputWithError>

  </div>
</template>

<script>
// @ is an alias to /src
// import axios from "axios";
// import Movie from "../components/Movie.vue";
import Skeleton from "../components/Skeleton.vue";
import InputWithError from "../components/InputWithError.vue";
export default {
  name: "NewMovie",
  components: {
     Skeleton, InputWithError
  },
  data(){
    return {
    
    };
  },

};
</script>
