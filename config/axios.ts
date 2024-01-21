import axios from "axios";
import {
  getAccessToken,
  getRefreshToken,
  refreshAccessToken,
} from "../utils/auth";

const axiosForChatApp = axios.create({
  baseURL: "localhost:3000",
  timeout: 10000, // Timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to attach the access token to each request
axiosForChatApp.interceptors.request.use(
  async (config) => {
    const accessToken = await getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh and retry failed requests
axiosForChatApp.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to an expired access token
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      // Attempt to refresh the access token using the refresh token
      const refreshToken = await getRefreshToken();
      if (refreshToken) {
        const newAccessToken = await refreshAccessToken(refreshToken);

        // Update the original request with the new access token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // Retry the original request with the new access token
        return axiosForChatApp(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosForChatApp;
