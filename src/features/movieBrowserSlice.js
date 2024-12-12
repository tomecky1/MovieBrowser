import {createSlice} from "@reduxjs/toolkit";

const movieBrowserSlice = createSlice({
  name: 'movieBrowser',
  initialState: {
    movies: [],
    status: 'initial',
  },
  reducers: {
    fetchMovies: () => ({
      status: 'loading',
      repositories: null,
    }),
    fetchMoviesSuccess: (_, {payload: repositories}) => ({
      status: 'success',
      repositories,
    }),
    fetchMoviesError: () => ({
      status: 'error',
      repositories: null,
    }),
  },
});
export const {fetchMovies, fetchMoviesSuccess, fetchMoviesError} = movieBrowserSlice.actions;

const selectMovieDetalsState = state => state.movies

export default movieBrowserSlice.reducer;
