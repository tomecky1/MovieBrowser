import { getMovieDetails } from "./movieDetailsAPI";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchMovies, fetchMoviesError, fetchMoviesSuccess } from "./movieBrowserSlice";

const loadingDelay = 300;

function* fetchMovieDetailsHandler() {
  try {
    yield delay(loadingDelay);
    const movies = yield call(getMovieDetails);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesError(error));
  }
}

export function* movieBrowserSaga() {
  yield takeLatest(fetchMovies.type, fetchMovieDetailsHandler);
}