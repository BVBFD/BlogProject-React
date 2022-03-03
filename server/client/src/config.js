import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://blogprojectorigin.herokuapp.com/api/",
});
