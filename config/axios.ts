import axios from "axios";
import { getAccessToken, getRefreshToken, saveTokens } from "../utils/auth";

export const serverUrl = "http://192.168.137.32:3000";

const axiosForChatApp = axios.create({
  baseURL: `${serverUrl}/api/v1`,
  timeout: 10000, // Timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

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
        const tokens = await axiosForChatApp.post("/users/refresh_token", {
          refresh_token: refreshToken,
        });
        await saveTokens(
          tokens.data.data.accessToken,
          tokens.data.data.refreshToken
        );
        // Update the original request with the new access token
        originalRequest.headers.Authorization = `Bearer ${tokens.data.data.accessToken}`;

        // Retry the original request with the new access token
        return axiosForChatApp(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosForChatApp;
