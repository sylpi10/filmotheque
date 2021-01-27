<template>
    <main>
        <div class="">
            <span v-if="loading" class="loader">Loading movies...</span>
            <div class="search">
              <div class="">
                <label for="movie-title">Find a Movie:</label>
                <input type="search" name="movie-title" v-model="search" placeholder="Ex:Usual Suspect">
              </div>

                <button class="filterBtn" :class="{ active: nameActive }"
                    @click="filterByName()">By Name</button>
                <button class="filterBtn" :class="{ active: yearActive }" 
                    @click="filterByDate()">By Date</button>
                <div class="select">
            
                <select name="direction" id="" v-model="isAscending" >
                  <option @click="isAscending = true" value="true"> &#11165; </option>
                  <option value="false" @click="isAscending = false"> &#11167; </option>
                </select>
               
                </div>
            </div>
        </div>
        <div class="movies-wrapper">
            <Movie v-for="movie in filterMovies" :key="movie.id">
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
      isAscending: true,
      yearActive:false,
      nameActive:false,
      search: "",
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
    // filteredList(){
    //     // return all movies & filter on search
    //    return this.movies.filter(movie => {
    //       return movie.name.toLowerCase().includes(this.title.toLowerCase());
    //     })
    // },

    filterMovies: function() {
     let filtered = this.movies;
     this.isAscending == this.setDirection();
      if (this.search) {
        filtered = this.movies.filter(
          // m => m.name.toLowerCase().indexOf(this.search) > -1
          m => m.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }
      // if (this.isAscending) {
      //     filtered = this.movies.filter(
      //       m => m.isAscending == this.setDirection()
      //     );
      // }

      if (this.yearActive) {
        filtered == this.filterByDate()
      }if (this.nameActive){
        filtered == this.filterByName()
      }
      
      return filtered;
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
      if (this.isAscending) {
        this.movies.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
      }else {
        this.movies.sort((b, a) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
      }
      this.nameActive = true;
      this.yearActive = false;
    },
    filterByDate(){
      if (this.isAscending) {
        this.movies.sort((a, b) => a.year > b.year);
       } else {
         this.movies.sort((b, a) => a.year > b.year);
       }
         this.yearActive = true;
         this.nameActive = false;
    },
   
   setDirection(){
      if (this.yearActive) {
        this.filterByDate()
      }if (this.nameActive){
        this.filterByName()
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
      margin:30px auto;
      display: flex;
      width: 40%;
      justify-content: space-around;
      align-items: center;
      
      label{
        margin-right: 10px;
      }
      button{
        border: none;
        background-color: rgb(84, 144, 255);
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
        padding:7px 10px;
        &:hover{
          opacity: .8;
        }
      }
       .active{
          background-color: rgb(16, 93, 238);
          box-shadow: 2px 2px 2px #bbb, -2px -2px 2px #bbb;
        }
 
      select{
        cursor: pointer;
        border: none;
        background-color: lightgreen;
        padding:4px 20px;
        appearance: none; 
        height: 30px;
        &:hover{
        background-color: rgb(120, 223, 120);
        }
      }

  }
</style>
