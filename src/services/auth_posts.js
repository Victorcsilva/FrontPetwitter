import client from "../providers/client.js";

export const posts = (data) => client.post("/posts", data);

export const allposts = (params) =>
  client.get(`/posts?take=10${params ? "&skip=" + params : ""}`);

export const allpostsid = (params, id) =>
  client.get(`/posts/${id}?take=10${params ? "&skip=" + params : ""}`);

export const userposts = () => client.get(`/users`);

export const getusers = (id) => client.get(`/users/${id}`);

export const allpost = (id) => client.get(`/posts/${id}`);
