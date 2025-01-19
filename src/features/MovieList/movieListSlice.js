import { createSlice } from "@reduxjs/toolkit";
import { loadingStatus, successStatus, errorStatus } from "../../common/constants/resqestStatuses/index";

const initialState = {
    movies: [],
    fetchMoviesStatus: "idle",
};

export const movieListSlice = createSlice({
    name: "movieList",
    initialState,
    reducers: {
        fetchMovies: (state) => {
            state.fetchMoviesStatus = "loading";
        },
        fetchMoviesSuccess: (state, { payload: movies }) => {
            state.fetchMoviesStatus = successStatus;
            state.movies = movies;
        },
        fetchMoviesError: (state) => {
            state.fetchMoviesStatus = errorStatus;
        },
        resetMovies: (state) => {
            state.fetchMoviesStatus = loadingStatus;
            state.movies = [];
        },
    },
});

export const {
    fetchMovies,
    fetchMoviesSuccess,
    fetchMoviesError,
    resetMovies,
} = movieListSlice.actions;

export const selectMovieListState = (state) => state.movieList;
export const selectMovies = (state) => state.movieList.movies;
export const selectFetchMoviesStatus = (state) => selectMovieListState(state).fetchMoviesStatus;
export const movieListReducer = movieListSlice.reducer;