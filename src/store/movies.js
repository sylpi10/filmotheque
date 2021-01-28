import axios from "axios";


export default ({
  state: () => ({
    movies: [],
    isModalOpened: false,
    loading: false
  }),
  getters: {
    getMovies: (state) => {
      return state.movies;
    },
    getLoader: (state) => {
      return state.loading;
    },
    getFavoriteMovies: (state) => {
      return state.movies.filter((movie) => movie.liked);
    },
    getFilteredMovies: (state) => {
      return state.filtered;
    }

  },
  mutations:{
    fillMovies(state, payload) {
      state.movies = payload;
    },
    setLoader(state, payload){
      state.loading = payload;
    },
    setFilterMovies(state, payload){
      state.filtered = payload;
    }
    // toggleModal(state){
    //   state.isModalOpened = !state.isModalOpened;
    // }
  },
  actions: {
    async fetchMovies( context ){
      context.commit('setLoader', true);
      const response = await axios.get('https://movies-api.alexgalinier.now.sh/');
      const movies = response.data;
      context.commit('setLoader', false);
      context.commit('fillMovies', movies);
    },
    filterMovies: (context) => {
      let filtered = this.getMovies;
      //  this.isAscending == this.setDirection();
        if (this.search) {
          // filtered = this.movies.filter(
          filtered = this.getMovies.filter(
            // m => m.name.toLowerCase().indexOf(this.search) > -1
            m => m.name.toLowerCase().includes(this.search.toLowerCase())
          );
        }
        context.commmit('filterMovies', filtered)
        // return filtered;
      },
  },
  modules: {}
});
