import axios from "axios";


export default ({
  state: () => ({
    movies: [],
    isModalOpened: false,
    loading: false,
   
  }),
  getters: {
    getMovies: (state) => {
      return state.movies;
    },
    getLoader: (state) => {
      return state.loading;
    },
    // getFavoriteMovies: (state) => {
    //   return state.movies.filter((movie) => movie.liked);
    // },
    getFilteredMovies: (state) => (search) => {
      if (search) {
        return state.movies.filter(
            m => m.name.toLowerCase().includes(search.toLowerCase()) 
        );
      }
      return state.movies;
    },

  },
  mutations:{
    fillMovies(state, payload) {
      state.movies = payload;
    },
    setLoader(state, payload){
      state.loading = payload;
    },

  },
  actions: {
    async fetchMovies( context ){
      context.commit('setLoader', true);
      const response = await axios.get('https://movies-api.alexgalinier.now.sh/');
      const movies = response.data;
      context.commit('setLoader', false);
      context.commit('fillMovies', movies);
    },
    async addMovie(context, movie) {
      const postData = { name: movie.name, year: movie.year, url: movie.url};
      await axios
          .post("https://movies-api.alexgalinier.now.sh/", postData);
      movie.name = "";
      movie.year = 1900;
      movie.url = "";

    },
    async updateMovie(context, movie) {
      const postData = { name: movie.name, year: movie.year, url: movie.url};
      await axios
          .put("https://movies-api.alexgalinier.now.sh/", postData);
      movie.name = "";
      movie.year = 1900;
      movie.url = "";
    },

  },
  modules: {}
});
