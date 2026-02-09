import axios from "axios";

export const api = axios.create({
  headers: {
    "Accept-Language": "en-US",
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.data.error === "UnAuthorized - No Token Provided") {
      localStorage.clear();

      window.location.href = "/";
    }

    return Promise.reject(error);
  },
);
