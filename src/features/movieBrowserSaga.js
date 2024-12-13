import {getMoviesFromAPI} from "./movieDetailsAPI";
import {call, delay, put, takeLatest} from "redux-saga/effects";
import {fetchMoviesError, fetchMoviesSuccess} from "./movieBrowserSlice";


const loadingDelay = 2000;

function* fetchMovieDetailsHandler({payload: username}) {
  try {
    yield delay(loadingDelay);
    const repositories = yield call(getMoviesFromAPI());
    yield put(fetchMoviesSuccess(repositories));
  } catch (error) {
    yield put(fetchMoviesError(error));
  }
}

export function* movieBrowserSaga() {
  yield takeLatest(fetchMovieDetailsHandler.type, fetchMovieDetailsHandler);
}