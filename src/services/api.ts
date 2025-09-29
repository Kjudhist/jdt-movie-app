import axios from "axios";

let bearerToken =
"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmM0NWNhNzNmZWQwYjNlNDc5MTk2MDQwZDhhMWM2YSIsIm5iZiI6MTc1ODQ3MzA1MS4zNzYsInN1YiI6IjY4ZDAyYjViMWZlMWVlYTFjZWNlYzQzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Az2YLIwlFNIORriMh9DPsDu-GefhWDu1e3gVsKbMGII"

const API = axios.create();

export const setAxiosConfig = (token: string) => {
  bearerToken = token;
};

API.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = import.meta.env.VITE_BASE_URL;
  axiosConfig.headers.Authorization = `Bearer ${bearerToken}`;

  return axiosConfig;
});

export default API;
