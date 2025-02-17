import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import saga from './saga.js';
import movieBrowserSlice from "../features/movieBrowserSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movieBrowser: movieBrowserSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
sagaMiddleware.run(saga);
export default store;
