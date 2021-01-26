<template>
    <main>
        <div class="">
            <span v-if="loading" class="loader">Loading movies...</span>
            <div class="search">
              <div class="">
                <label for="movie-title">Find a Movie:</label>
                <input type="search" name="movie-title" v-model="title" placeholder="Ex:Usual Suspect">
              </div>
                <!-- <select name="Filter" id="" :change="applyFilter()" v-model="selectedFilter"> 
                  <option >Filter</option>
                  <option value="byName" >By Name</option>
                  <option value="byDate">By Date</option>
                </select> -->
                <button class="filterBtn" @click="filterByName()">By Name</button>
                <button class="filterBtn" @click="filterByDate()">By Date</button>
                <div class="select">
                <select name="direction" id="" v-model="direction">
                  <option selected="selected" value="asc">Asc </option>
                  <option value="dsc">Dsc</option>
                </select>
               
                </div>
            </div>
        </div>
        <div class="movies-wrapper">
            <Movie v-for="movie in filteredList" :key="movie.id">
                <template v-slot:name>
                    <h1>{{movie.name | capitalize}} </h1>
                </template>
                <template v-slot:year>
                    <h2> {{movie.year}} </h2>
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
      direction: 'asc'
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
        // return all movies & filter on search
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
      // sort movies by name
      this.movies = await response.data;
      this.loading = await false;
    },
    filterByName(){
      if (this.direction == "asc") {
        this.movies.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
      }else if (this.direction == "dsc") {
        this.movies.sort((b, a) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
      }
    },
    filterByDate(){
       if (this.direction == "asc") {
        this.movies.sort((a, b) => a.year.localeCompare(b.year));
       } else  if (this.direction == "dsc") {
         this.movies.sort((b, a) => a.year.localeCompare(b.year));
       }
    },

    toUpdate(idToUpdate){
       this.$router.push(`edit-movie/${idToUpdate}`) 
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
      display: flex;
      width: 40%;
      margin: auto;
      justify-content: space-around;
      align-items: center;
      label{
        margin-right: 10px;
      }
      button{
        border: none;
        background-color: rgb(16, 93, 238);
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
        padding:7px 10px;
      }
      select{
        border: none;
        background-color: lightgreen;
        padding:4px 20px;
        appearance: none; 
        height: 30px;
      }

  }
</style>
