<template>
    <main>
        <div class="">
            <span v-if="loading" class="loader">loading movies</span>
            <div class="search">
                <label for="movie-title">Find a Movie:</label>
                <input type="search" name="movie-title" v-model="title" placeholder="Ex:Usual Suspect">
            </div>
        </div>
        <div class="movies-wrapper">
            <Movie v-for="movie in filteredList" :key="movie.id">
                <template v-slot:name>
                    <h1>
                    {{movie.name | capitalize}}
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
                <template v-slot:buttons>
                    <div class="btns">
                    <button class="update btn" @click="toUpdate(movie.id)">Update</button>
                    <!-- <router-link :to="{ name: 'Edit', params: { id: movie.id } }" class="update btn">Edit</router-link> -->
                    
                    <button class="delete btn"
                        @click="deleteMovie()"
                    > &times; </button>
                    </div>
                </template>
            </Movie> 
        </div>
    </main>
</template>

<script>
import axios from "axios";
import Movie from "../components/Movie.vue";
export default {
    name: "Movies",
     components: {
       Movie
    },
    data(){
    return {
      movies: [],
      loading: false,
      title: '',
    };
  },
  filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
},
  computed: {
    filteredList(){
       return this.movies.filter(movie => {
          return movie.name.toLowerCase().includes(this.title.toLowerCase());
        })
    },
  },
  methods: {
    async consumeMovieApi() {
   // GET request using axios with async/await
      this.loading = true;
      const response = await axios.get("https://movies-api.alexgalinier.now.sh/");
      this.movies = response.data.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
      this.loading = false;
    },
     toUpdate(idToUpdate){
      this.$router.push(`new-movie/${idToUpdate}`) 
    //   this.$router.push(`edit/${idToUpdate}`) 
    },
    deleteMovie(){
      alert('todo: delete movie');
    }
  },
   mounted(){
    this.consumeMovieApi()
 },
}
</script>

<style lang="scss">
    .card{
        width: 340px;
        margin: 20px;
        border: solid 1px #ccc;
        border-radius: 10px;
        h1{
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background-color: orange;
            margin-top: 0;
            padding: 10px;
        }
        .img img{
            // max-height: 320px;
            height: 240px;
            box-shadow:3px 3px 3px#ccc, -3px -3px 3px#ccc;
            border-radius: 6px;
            margin-bottom: 12px;
        }
    }
</style>
