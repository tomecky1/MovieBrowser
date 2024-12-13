import {configureStore} from "@reduxjs/toolkit";
// import themeSlice from "./common/themeSlice.js";
import createSagaMiddleware from 'redux-saga';
import saga from './saga.js';
import movieBrowserSlice from "../features/movieBrowserSlice";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movieBrowser: movieBrowserSlice,
    // theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export default store;
