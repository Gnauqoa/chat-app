import axiosForChatApp from "../config/axios";
import { AxiosResponse } from "axios";

export function refreshAccessTokenAPI(refreshToken: string) {
  return axiosForChatApp.post("/users/refresh_token", {
    refresh_token: refreshToken,
  });
}

export type LoginResponseType = {
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export function loginAPI(
  email: string,
  password: string
): Promise<AxiosResponse<LoginResponseType>> {
  return axiosForChatApp.post("/users/signIn", { email, password });
}
