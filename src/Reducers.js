import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  posts: []
};

export const postReducers = createReducer(initialState, {
  posts: (state, action) => {
    state.posts = action.payload;
  }
})