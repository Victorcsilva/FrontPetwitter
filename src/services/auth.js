import client from "../providers/client.js";

export const login = (data) => client.post("/login", data);

export const getFromStorage = (key) => JSON.parse(localStorage.getItem(key));

export const setInStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

export const signup = (data) => client.post("/signup", data);

export const posts = (data) => client.post("/posts", data);
