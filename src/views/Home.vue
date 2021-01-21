<template>
  <div class="home">
      <h1>Filmotheque</h1>
      <span>{{loading}}</span>
      <div class="search">
        <label for="movie-title">Find a Movie</label>
        <input type="search" name="movie-title" v-model="title" id="">
      </div>
      <hr>
      <main class="movies-wrapper">
      <Movie v-for="movie in filteredList" :key="movie.id">
           <template v-slot:name>
            <h1>
              {{movie.name}}
            </h1>
          </template>
           <template v-slot:year>
            <h2>
              {{movie.year}}
            </h2>
          </template>
            <template v-slot:image>
            <img :src="`${movie.url}`" alt="Movie Poster" width="300">  
          </template>
      </Movie> 
      </main>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Movie from "../components/Movie.vue";
export default {
  name: "Home",
  components: {
    Movie
  },
  data(){
    return {
      movies: [],
      loading: '',
      title: ''
    };
  },
  computed: {
    filteredList(){
        return this.movies.filter((movie) => {
            return movie.name.toLowerCase().includes(this.title.toLowerCase());
        })
  },
  },
  methods: {
    async consumeMovieApi() {
   // GET request using axios with async/await
      const response = await axios.get("https://movies-api.alexgalinier.now.sh/");
      this.loading = 'loading movies';
      this.movies = response.data;
      this.loading = '';
    }
  },
   beforeMount(){
    this.consumeMovieApi()
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
</style>