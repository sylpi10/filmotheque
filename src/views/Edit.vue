<template>
  <div class="add">
     <!-- <Skeleton pageTitle="Edit A Movie">
    </Skeleton> -->
    <Header>
       <template v-slot:pageTitle >
                <h1 class="title">
                    {{pageTitle}}
                </h1>
        </template>
    </Header>
    <hr>

  <div class="form">
    <form action="">
      <h3>Edit: <span> {{ movie.name }} </span> </h3>
      <InputWithError v-model="movie.name" :aria-placeholder="movie.name">
      </InputWithError>
      <InputWithError v-model.number="movie.year" :aria-placeholder="movie.year">
      </InputWithError>
      <InputWithError v-model="movie.url" :aria-placeholder="movie.url">
      </InputWithError>
        <button @click.prevent="editMovie()">Edit</button>

        <p class="success">{{success}}</p>
    </form>
  </div>

  </div>
</template>

<script>
import axios from "axios";
import InputWithError from "../components/InputWithError.vue";
import Header from '../components/Header.vue';
export default {
  name: "Edit",
  components: {
    InputWithError,
    Header
  },
  data(){
    return {
      movies: [],
      success: '',
      pageTitle: "Edit movie",
      movie: {
        year: 1880,
        name: '',
        url: "",
        id: 0,
      },
    };
  },
   created() {
    this.id = this.$route.params.id;
    console.log("movie id is" + this.id)
  },
    methods: {
    async getMovie() {
   // GET request using axios with async/await
      const response = await axios.get(`https://movies-api.alexgalinier.now.sh`);
      this.movies = response.data;
      this.movie = this.movies.find(el => el.id == this.id);
    },
    editMovie() {
      // const putData = { name: this.name, year: this.year, url: this.url};
      axios
        .put(`https://movies-api.alexgalinier.now.sh/${this.movie.id}`, this.movie)
        .then(res => {
          console.log(res.data);
          this.name = '';
          this.year = 1880;
          this.url = '';
          this.success = "Movies has been updated !!"
        });
      
    },
  },
   beforeMount(){
       this.getMovie()
 },
}
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
            h3 span{
              color: rgb(94, 32, 238);
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
            .success{
              color: green;
            }
        }
    }
</style>