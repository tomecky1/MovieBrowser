import {createSlice} from "@reduxjs/toolkit";

const movieBrowserSlice = createSlice({
  name: 'movieBrowser',
  initialState: {
    repositories: [],
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

const selectMovieBrowserState = state => state.movieBrowser;
export const selectRepositories = state => selectMovieBrowserState(state).repositories;
export const selectStatus = state => selectMovieBrowserState(state).status;

export default movieBrowserSlice.reducer;
