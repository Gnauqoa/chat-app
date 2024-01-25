import { AxiosResponse } from "axios";
import {
  DataResponseType,
  PaginationParamsType,
  PaginationResponseType,
} from ".";
import { Room } from "../types/room";
import axiosForChatApp from "../config/axios";
import { Message } from "../types/message";

export function getRoomsAPI(
  params: PaginationParamsType & {
    query: string;
  }
): Promise<AxiosResponse<PaginationResponseType<Room>>> {
  return axiosForChatApp.get(`/rooms`, { params });
}

export const getMessagesAPI = async ({
  roomId,
  ...params
}: PaginationParamsType & {
  roomId: number | string;
}): Promise<AxiosResponse<PaginationResponseType<Message>>> => {
  return axiosForChatApp.get(`/rooms/${roomId}/messages`, { params });
};
export const createRoomAPI = async ({
  users,
  name,
}: {
  users: { id: string }[];
  name: string;
}): Promise<AxiosResponse<DataResponseType<Room>>> => {
  return axiosForChatApp.post(`/rooms`, { users, name });
};
export const updateRoomAPI = async ({
  roomId,
  data,
}: {
  roomId: string | number;
  data: { name: string };
}): Promise<AxiosResponse<DataResponseType<Room>>> => {
  return axiosForChatApp.put(`/rooms/${roomId}`, data);
};
