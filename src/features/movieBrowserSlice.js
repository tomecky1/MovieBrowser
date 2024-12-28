import { createSlice } from "@reduxjs/toolkit";

const movieBrowserSlice = createSlice({
  name: "movieBrowser",
  initialState: {
    movies: [],
    status: "initial",
  },
  reducers: {
    fetchMovies: (state) => {
      state.status = "loading";
      state.movies = [];
    },
    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.status = "success";
      state.movies = Array.isArray(movies) ? movies : [];
    },
    fetchMoviesError: (state) => {
      state.status = "error";
    },
  },
});
export const { fetchMovies, fetchMoviesSuccess, fetchMoviesError } =
  movieBrowserSlice.actions;

const selectMovieBrowserState = (state) =>
  state.movieBrowser || { movies: [], status: "initial" };
export const selectMovies = (state) => selectMovieBrowserState(state).movies;
export const selectStatus = (state) => selectMovieBrowserState(state).status;

export const getMovieById = (state, movieId) =>
  selectMovies(state).find(({ id }) => id === movieId);

export default movieBrowserSlice.reducer;
