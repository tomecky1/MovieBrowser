import { createSlice } from "@reduxjs/toolkit";
import { loadingStatus, successStatus, errorStatus } from "../../common/constants/resqestStatuses/index";

export const movieCreditsSlice = createSlice({
    name: "movieCredits",
    initialState: {
        movieCredits: [],
        fetchMovieCreditsStatus: loadingStatus,
    },
    reducers: {
        fetchMovieCredits: () => { },
        fetchMovieCreditsSuccess: (state, { payload: movieCredits }) => {
            state.fetchMovieCreditsStatus = successStatus;
            state.movieCredits = movieCredits;
        },
        fetchMovieCreditsError: (state) => {
            state.fetchMovieCreditsStatus = errorStatus;
        },
        resetMovieCredits: (state) => {
            state.movieCredits = [];
            state.fetchMovieCreditsStatus = loadingStatus;
        },
    }
});

export const {
    fetchMovieCredits,
    fetchMovieCreditsSuccess,
    fetchMovieCreditsError,
    resetMovieCredits
} = movieCreditsSlice.actions;
export const selectMovieCreditsState = state => state.movieCredits;
export const selectMovieCreditsFetchStatus = state => selectMovieCreditsState(state).fetchMovieCreditsStatus;
export const selectMovieCredits = state => selectMovieCreditsState(state).movieCredits;
export const movieCreditsReducer = movieCreditsSlice.reducer;