<template>
  <div class="add">
     <Skeleton msg="Edit A Movie">
    </Skeleton>
    <hr>

  <div class="form">
    <form action="">
      
      <h3>Edit Movie </h3>
      <InputWithError :title.sync="title" :year.sync="year" :url.sync="url">
        
      </InputWithError>
      <!-- <InputWithError>
        <custom-input v-model="title"></custom-input>
        <custom-input v-model="year"></custom-input>
        <custom-input v-model="url"></custom-input>
      </InputWithError> -->
        <button @click.prevent="createMovie()">Create</button>
    </form>
  </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import Movie from "../components/Movie.vue";
import Skeleton from "../components/Skeleton.vue";
import InputWithError from "../components/InputWithError.vue";
export default {
  name: "Edit",
  components: {
     Skeleton, InputWithError
  },
  data(){
    return {
      movies: [],
      year: 1880,
      title: '',
      url: "",
    };
  },
  computed:{
    printId() {
      const id = this.$route.query.id;
      return id;
    }
  },
  methods: {
    getId(){
      this.id = this.$route.query.id;
    }
  },
    beforeMount(){
      this.getId()
 },

};
</script>

<style lang="scss">
    .form{
        background-color: rgb(184, 246, 184);
        width: 50%;
        margin: auto;
        border-radius: 20px;
        padding: 20px;
        form{
            display: flex;
            flex-direction: column;
            input{
                margin: 20px;
            }
            button{
                border-radius: 4px;
                width: 240px;
                background-color: rgb(64, 64, 206);
                border: none;
                padding: 12px;
                color: #fff;
                margin:10px auto;
                cursor: pointer;
                &:hover{
                    opacity: .85;
                }
            }
        }
    }
</style>