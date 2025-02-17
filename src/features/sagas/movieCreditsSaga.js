import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMovieCreditsError, fetchMovieCreditsSuccess, fetchMovieCredits } from "../slices/movieCredditsSlice";
import { API_KEY } from "../../common/constants/config";
import { BASE_URL } from "../../common/constants/config";

function* fetchMoviesCreditsListApiHandler(action) {
    try {
        const response = yield call(fetch,
            `${BASE_URL}/movie/${action.payload}/credits?api_key=${API_KEY}`
        );
        const data = yield response.json();
        yield put(fetchMovieCreditsSuccess(data));
    } catch {
        yield put(fetchMovieCreditsError());
    }
};

export function* movieCreditsSaga() {
    yield takeLatest(fetchMovieCredits.type, fetchMoviesCreditsListApiHandler);
};