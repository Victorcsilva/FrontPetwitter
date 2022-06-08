import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  fav: true,
  isLoading: false,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    FETCH_POSTS(state, action) {
      state.posts = action.payload;
    },

    ADD_POST(state, action) {
      state.posts = [action.payload, ...state.posts];
    },

    ToggleFav(state, action) {
      let postIndex = state.posts.findIndex(
        (item) => item.objectId === action.payload
      );
      state.posts[postIndex].favourite = !state.posts[postIndex].favourite;
    },

    ShowFav(state) {
      state.fav = !state.fav;
    },

    delete_Post(state, action) {
      state.posts.splice(
        state.posts.findIndex((item) => item.objectId === action.payload),
        1
      );
    },
    set_loading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const {
  FETCH_POSTS,
  ADD_POST,
  ToggleFav,
  ShowFav,
  delete_Post,
  set_loading,
} = postSlice.actions;

export default postSlice.reducer;
