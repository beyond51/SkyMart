import axios, { Axios } from "axios";

export let axiosinstance = axios.create({
  baseURL: "https://dummyjson.com/products",
});
