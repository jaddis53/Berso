import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.231.111:8000/",
  // timeout: 5000,
  // headers: {
  //   "Content-Type": "application/json",
  // },
  // baseURL: "http://192.168.1.3:8000/",
  //   timeout: 5000,
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
});

export default api;
