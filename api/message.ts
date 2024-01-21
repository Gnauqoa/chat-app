import { AxiosResponse } from "axios";
import { PaginationParamsType, PaginationResponseType } from ".";
import { Message } from "../types/message";
import axiosForChatApp from "../config/axios";

export const getMessages = async ({
  roomId,
  ...params
}: PaginationParamsType & {
  roomId: number;
}): Promise<AxiosResponse<PaginationResponseType<Message>>> => {
  return axiosForChatApp.get(`/rooms/${roomId}/messages`, { params });
};

export const createMessage = async ({
  roomId,
  message,
}: {
  roomId: number;
  message: string;
}): Promise<AxiosResponse<Message>> => {
  return axiosForChatApp.post(`/rooms/${roomId}/messages`, { message });
};

export const deleteMessage = async (
  messageId: string
): Promise<AxiosResponse<{ message: string }>> => {
  return axiosForChatApp.delete(`/messages/${messageId}`);
};
