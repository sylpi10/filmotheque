<template>
  <div class="home">
    <!-- <Header>
        <template v-slot:page-title>
              Filmotheque
          </template>
    </Header> -->
    <Skeleton msg="Filmotheque">

    </Skeleton>
      <span v-if="loading" class="loader">loading movies</span>
     
       <div class="search">
        <label for="movie-title">Find a Movie:</label>
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
           <template v-slot:buttons>
            <div class="btns">
              <button class="update" @click="toUpdate(movie.id)">Update</button>
              <button class="delete"
                @click="deleteMovie()"
              > X </button>
            </div>
          </template>
      </Movie> 
      </main>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Movie from "../components/Movie.vue";
import Skeleton from "../components/Skeleton.vue";
// import Header from "../components/Header.vue";
export default {
  name: "Home",
  components: {
    Movie, Skeleton
  },
  data(){
    return {
      movies: [],
      loading: false,
      title: '',
      isEditing: false
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
      this.loading = true;
      const response = await axios.get("https://movies-api.alexgalinier.now.sh/");
      this.movies = response.data;
      this.loading = false;
    },
     toUpdate(idToUpdate){
      this.isEditing = true;
      this.id = idToUpdate;
      console.log(this.id)
      this.$router.push(`edit/${this.id}`) 
    },
    deleteMovie(){
      alert('todo: delete movie');
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
.btns button{
  border: none;
  padding: 4px 12px;
  border-radius: 8px;
  cursor: pointer;
}
.btns button:hover{
  opacity: .7;
}
.btns .update{
  background-color: lightgreen;
}
.btns .delete{
  background-color: red;
  color: #fff;
}

</style>