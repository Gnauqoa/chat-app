import { AxiosResponse } from "axios";
import axiosForChatApp from "../config/axios";
import { DataResponseType } from ".";
import { User } from "../types/user";

const getUserAPI = async (): Promise<AxiosResponse<DataResponseType<User>>> => {
  return axiosForChatApp.get("/users/current");
};

export default getUserAPI;
