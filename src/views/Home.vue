<template>
  <div class="home">
      <Skeleton>
      </Skeleton>
    
  </div>
</template>

<script>
// import axios from "axios";
// import Movie from "../components/Movie.vue";
import Skeleton from "../components/Skeleton.vue";

export default {
  name: "Home",
  components: {
     Skeleton
  },

};
</script>

<style lang="scss">
    .movies-wrapper{
      width: 74%;
      margin: auto;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    .loader{
      background-color: lightgreen;
      padding: 4px 16px;
      text-align: center;
      border-radius: 20px;
      margin-bottom: 12px;
      color: #fff;
    }
    .search{
      margin: 20px;
      label{
        margin-right: 10px;
      }
    }

.btns{
  margin: 8px;
  display: flex;
  justify-content: space-around;
}
.btns .btn {
  border: none;
  padding: 4px 12px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  color:#fff;
}
.btns .btn:hover{
  opacity: .7;
}
.btns .update{
  background-color: rgb(16, 93, 238);
}
.btns .delete{
  background-color: red;
  color: #fff;
}

</style>