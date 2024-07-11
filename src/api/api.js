import axios from "axios";

// Create an instance of axios with custom configuration
const api = axios.create({
  baseURL: "http://localhost:8000/", // Base URL for all requests made by this instance
  // timeout: 1000,
  headers: {
    Accept: "application/json", // Set Accept header to indicate acceptance of JSON responses
    "Content-Type": "application/json", // Set Content-Type header to indicate sending JSON data
  },
});

// Add a request interceptor to include the token in headers
api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api; // Export the configured axios instance
