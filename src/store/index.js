import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);

import movies from './movies';

export default new Vuex.Store({
  state: {
    // movies: [],
    // isModalOpened: false,
    // loading: false
  },
  getters: {
    // getMovies: (state) => {
    //   return state.movies;
    // },
    // getLoader: (state) => {
    //   return state.loading;
    // },
    // getFavoriteMovies: (state) => {
    //   return state.movies.filter((movie) => movie.liked);
    // },
    // getSortedMovies: (state, isAscending) => {
    //   if(isAscending){
    //     return state.movies.sort((a, b) => a - b);
    //   }else{
    //       return state.movies.sort((b, a) => a - b);
    //   }
    // },
  },
  mutations:{
    // fillMovies(state, payload) {
    //   state.movies = payload;
    // },
    // setLoader(state, payload){
    //   state.loading = payload;
    // }
    // toggleModal(state){
    //   state.isModalOpened = !state.isModalOpened;
    // }
  },
  actions: {
    // async fetchMovies( context ){
    //   context.commit('setLoader', true);
    //   const response = await axios.get('https://movies-api.alexgalinier.now.sh/');
    //   const movies = response.data;
    //   context.commit('setLoader', false);
    //   context.commit('fillMovies', movies);
    // },
  },
  modules: {
    movies,
  }
});
