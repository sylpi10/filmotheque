<template>
    <main>
        <div class="">
            <span v-if="loading" class="loader">Loading movies...</span>
            <div class="search">
              <div class="">
                <label for="movie-title">Find a Movie:</label>
                <input type="search" name="movie-title" v-model="search" placeholder="Ex:Usual Suspect">
              </div>

              <div class="filters">
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
               
               <button @click="getFavorites()">Favorites</button>

                <span title="cancel filters" class="reset" @click="reset()">&times;</span>

            </div>
        </div>
        <div class="movies-wrapper">
            <Movie v-for="movie in getFilteredMovies(search)" :key="movie.id">
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
                    
                    <div class="like-container">
                      <input type="checkbox" name="checkbox" class="like" 
                        v-bind:id="movie.id" :value=movie.id
                        v-model="isFav"
                        @click="addToFavorites(movie)"
                      >
                      <label v-bind:for="movie.id"> <i class="fas fa-heart"></i> </label>
                    </div>

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
// import axios from "axios";
import Movie from "../components/Movie.vue";
import {mapActions, mapGetters, mapMutations} from "vuex";
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
      movie: {
        liked: true,
      },
      favorites: [],
      isFav: [] 
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
    ...mapGetters(["getMovies", "getLoader", "getFilteredMovies" ]),

    // filterMovies: function() {
    // //  let filtered = this.movies;
    //  let filtered = this.getMovies;
    //  this.isAscending == this.setDirection();
    //   if (this.search) {
    //     // filtered = this.movies.filter(
    //     filtered = this.getMovies.filter(
    //       // m => m.name.toLowerCase().indexOf(this.search) > -1
    //       m => m.name.toLowerCase().includes(this.search.toLowerCase())
    //     );
    //   }
    //   return filtered;
    // },
   
   getFav(){
      if (localStorage.getItem('isFav')) {
      try {
        this.isFav == JSON.parse(localStorage.getItem('isFav'));
        return this.isFav;
      } catch(e) {
        localStorage.removeItem('isFav');
      }
    }
      console.log(this.isFav)
    return this.isFav;
    }
  },
  methods: {
    ...mapActions(["fetchMovies", ]),
    ...mapMutations([ "setLoader"]),

    // async consumeMovieApi() {
    //   // GET request using axios with async/await

    //   this.loading = true;
    //   const response = await axios.get("https://movies-api.alexgalinier.now.sh/");
    //   this.movies = await response.data;
    //   this.loading = await false;
    // },

    filterByName(){
      if (this.isAscending) {
        this.getMovies.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
      }else {
        this.getMovies.sort((b, a) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
      }
      this.nameActive = true;
      this.yearActive = false;
    },
    filterByDate(){
      if (this.isAscending) {
        this.getMovies.sort((a, b) => a.year > b.year);
       } else {
         this.getMovies.sort((b, a) => a.year > b.year);
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
    reset(){
      this.search = "";
      this.yearActive = false;
      this.nameActive = false; 
      this.isAscending = true;
      // this.consumeMovieApi();
      this.fetchMovies();
    },

    toUpdate(idToUpdate){
       this.$router.push(`edit-movie/${idToUpdate}`) 
    //   this.$router.push(`edit/${idToUpdate}`) 
    },
    addToFavorites(movie){
      if (!this.isFav) {
        return;
      }
      movie = this.movies.find(el => el.id == movie.id);
      // this.favorites.push(movie)
      console.log(movie)
      const parsed = JSON.stringify(movie);
      localStorage.setItem('isFav', JSON.stringify(this.isFav, parsed));
      // localStorage.clear();
      console.log(localStorage);
},
    getFavorites(){
      // return this.movies;
      // this.movie = this.isFav.find(el => el.id == this.movie.id);
      console.log(localStorage.getItem('isFav'));
      // return this.movies = localStorage.getItem('isFav');
      return this.movies = this.isFav;
    },
    deleteMovie(){
      alert('todo: delete movie');
    }
  },
   async mounted(){
    // this.consumeMovieApi();
    this.loading = true;
    await this.fetchMovies();
    this.loading = false;
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
      width: 60%;
      justify-content: space-around;
      align-items: center;
      background-color: #fefefe;
      padding: 12px;
      
      label{
        margin-right: 10px;
      }
      .filters{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 30%;
        border: solid 1px #ddd;
        padding: 2px 12px;
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
      .reset{
        background-color: darkorange;
        margin-left: 20px;
        padding: 2px 8px;
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
        font-size: 1.4rem;
        &:hover{
          opacity: .9;
        }
      }

  }
</style>
