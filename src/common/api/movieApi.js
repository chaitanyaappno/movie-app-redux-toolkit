import axios from "axios";

const instance = axios.create({
  baseURL: "http://www.omdbapi.com/?i=tt3896198&apikey=a4f730ca",
  //   timeout: 1000,
  //   headers: { "X-Custom-Header": "foobar" },
});
