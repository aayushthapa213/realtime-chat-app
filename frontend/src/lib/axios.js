import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true, //sending cookies in every request
});

export default axiosInstance;