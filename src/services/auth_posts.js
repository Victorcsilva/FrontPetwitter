import { ADD_POST, set_loading } from "../providers/Posts-slices";
import client from "../providers/client.js";

export const posts = (data) => async (dispatch) => {
  dispatch(set_loading(true));
  let response = await client.post("/posts", data);

  const newPostId = response.data.objectId;
  const fetchNewPost = await client.get(`/posts/${newPostId}`);

  dispatch(set_loading(false));
  return dispatch(ADD_POST(fetchNewPost.data));
};
