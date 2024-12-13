import {all} from 'redux-saga/effects';
import {movieBrowserSaga} from "../features/movieBrowserSaga";

export default function* rootSaga() {
  yield all([
    movieBrowserSaga()
  ]);
}