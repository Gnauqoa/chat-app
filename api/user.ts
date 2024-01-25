import { AxiosResponse } from "axios";
import axiosForChatApp from "../config/axios";
import { DataResponseType } from ".";
import { User } from "../types/user";

export const getUserAPI = async (): Promise<
  AxiosResponse<DataResponseType<User>>
> => {
  return axiosForChatApp.get("/users/current");
};

export const updateUserAPI = async ({
  name,
}: {
  name: string;
}): Promise<AxiosResponse<DataResponseType<User>>> => {
  return axiosForChatApp.put("/users/current", { name });
};
