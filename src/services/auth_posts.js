//  import { ADD_POST, set_loading } from "../providers/Posts-slices";
import client from "../providers/client.js";

export const posts = (data) => {
  client.post("/posts", data);
};

export const allposts = (id) => client.get(`/posts`);

export const userposts = () => {
  client.get(`./users`);
};
