<template>
  <div class="add">
     <!-- <Skeleton pageTitle="Add A Movie">
    </Skeleton> -->
    <Header>
        <template v-slot:pageTitle >
                <h1 v-if="!movie.id" class="title">
                    Create a new Movie
                </h1>
                <h1 v-if="movie.id" class="title">
                    Update a Movie
                </h1>
        </template>
    </Header>
    <hr>

  <div class="form">
    <form action="" method="post" novalidate="novalidate">

      <h3 v-if="!movie.id">New Movie</h3>
      <h3 v-if="movie.id">Edit <span> {{movie.name}} </span> </h3> 
      <!-- <InputWithError :title.sync="title" :year.sync="year" :url.sync="url">
      </InputWithError> -->

      <InputWithError v-model="movie.name" :label="labelName" 
                      :errorMsg="msgName" @keyup.native="checkTitle()">
      </InputWithError>
      <InputWithError type="number" v-model.number="movie.year" 
                      :label="labelYear" :errorMsg="msgYear" @keyup.native="checkYear()">
      </InputWithError>
      <InputWithError v-model="movie.url" :label="labelUrl" 
                      :errorMsg="msgUrl" @keyup.native="checkUrl()">
      </InputWithError>
        <button v-if="!movie.id" @click.prevent="createMovie()" >Create</button>        
        <button v-if="movie.id" @click.prevent="editMovie()">Update</button>

          <p class="success">{{successMsg}}</p>
    </form>
  </div>

  </div>
</template>

<script>
import axios from "axios";
import InputWithError from "../components/InputWithError.vue";
import Header from "../components/Header.vue";
export default {
  name: "NewMovie",
  components: {
      InputWithError, Header
  },
  data(){
    return {
        labelName: "Title: ",
        labelYear: "Year: ",
        labelUrl: "Url: ",
        msgName: "",
        msgYear: "",
        msgUrl: "",
        successMsg: "",
        isValid: false,
        movies: [],
        movie: {
          year: 1900,
          name: '',
          url: "",
          id: 0,
      },
    };
  },
    created() {
        if (this.$route.params.id) {
          this.movie.id = this.$route.params.id;
          console.log("movie id is : " + this.movie.id);
        }
  },
  methods: {
   async createMovie() {
      if (await this.checkform()) {
        const postData = { name: this.movie.name, year: this.movie.year, url: this.movie.url };
        const response = await axios
          .post("https://movies-api.alexgalinier.now.sh/", postData);
            this.movies = await response.data;
            this.name = '';
            this.year = 1900;
            this.url = '';
            this.successMsg = await "The movie has been successfully created !!";
            setTimeout(() => {
              this.successMsg = "";
              this.$router.push(`/`); 
            }, 1600);
     }
    },
    checkform(){
      if (this.movie.name.length < 2) {
        this.msgName = "Title must have 2 chars min";
        return false;
      }else this.msgName = "";
      if (this.movie.year < 1900 || typeof(this.movie.year) != "number") {
        this.msgYear = "Year must be higher than 1900 and must a number";
        return false;
      } else this.msgYear = "";
      if (!(this.movie.url.toLowerCase().startsWith("http"))) {
        this.msgUrl = "Value must be a valid Url"
        return false;
      } else this.msgUrl = "";
        
        return true;
    },
    checkTitle() {
        if (this.movie.name.length < 2) {
          this.msgName = "Title must have 2 chars min";
        }else{
          this.msgName = "";
        }
    },
    checkYear() {
      if (this.movie.year < 1900 || typeof(this.movie.year) != "number") {
        this.msgYear = "Year must be higher than 1900 and must a number";
      } else this.msgYear = "";
    },
    checkUrl(){
       if (!(this.movie.url.toLowerCase().startsWith("http"))) {
        this.msgUrl = "Value must be a valid Url"
        return false;
      } else this.msgUrl = "";
    },
     // get all movies and isolate the actual one with id
      async getMovie() {
        if (this.movie.id) {
          const response = await axios.get(`https://movies-api.alexgalinier.now.sh`);
          this.movies = response.data;
          this.movie = this.movies.find(el => el.id == this.movie.id);
        }
    },

      editMovie() {
      //  const putData = { name: this.name, year: this.year, url: this.url};
      axios
        .put(`https://movies-api.alexgalinier.now.sh/${this.movie.id}`, this.movie)
        .then(res => {
          console.log(res.data);
          this.movie.name = '';
          this.movie.year = 1880;
          this.movie.url = '';
          this.success = "The movie has been updated !!";
        });
      
    },
    
  },
    beforeMount(){
       this.getMovie()
 },
};
</script>

<style lang="scss">
    .form{
        background-color: rgb(202, 246, 202);
        width: 50%;
        margin: auto;
        border-radius: 20px;
        padding: 20px;
        form{
            display: flex;
            flex-direction: column;
            input{
                margin: 20px auto;
                width: 50%;
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
               &:disabled{
                 background-color: #aaa;
                 cursor: auto;
               } 
            }
              h3 span{
                color: rgb(94, 32, 238);
            }
        }
          .success{
              margin: 20px auto;
              color: green;
            }
    }
</style>