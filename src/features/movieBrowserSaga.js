import {getMovieDetails} from "./movieDetailsAPI";
import {call, delay, put, takeLatest} from "redux-saga/effects";
import {fetchMovies, fetchMoviesError, fetchMoviesSuccess} from "./movieBrowserSlice";


const loadingDelay = 2000;

function* fetchMovieDetailsHandler() {
  try {
    yield delay(loadingDelay);
    const repositories = yield call(getMovieDetails);
    yield put(fetchMoviesSuccess(repositories));
  } catch (error) {
    yield put(fetchMoviesError(error));
  }
}

export function* movieBrowserSaga() {
  yield takeLatest(fetchMovies.type, fetchMovieDetailsHandler);
}