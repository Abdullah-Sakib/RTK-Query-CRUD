import { configureStore } from "@reduxjs/toolkit";
import { postReducers } from "./Reducers";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { postsApi } from "./postsApi";

const store = configureStore({
  reducer:{
    posts: postReducers,
    [postsApi.reducerPath]: postsApi.reducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(postsApi.middleware)
})

setupListeners(store.dispatch);

export default store;