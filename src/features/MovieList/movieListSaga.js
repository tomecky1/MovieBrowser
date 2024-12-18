import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMovies, fetchMoviesSuccess, fetchMoviesError } from "./movieListSlice";
import { API_KEY, BASE_URL } from "../../common/constants/config";

function* fetchMoviesHandler() {
    try {
        const response = yield call(fetch, `${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        const data = yield response.json();
        yield put(fetchMoviesSuccess(data.results));
    } catch (error) {
        console.error("Błąd podczas pobierania popularnych filmów:", error);
        yield put(fetchMoviesError());
    }
}

export function* movieListSaga() {
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
