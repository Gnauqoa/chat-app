import { AxiosResponse } from "axios";
import { PaginationParamsType, PaginationResponseType } from ".";
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
