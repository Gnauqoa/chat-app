import { AxiosResponse } from "axios";
import { Message } from "../types/message";
import axiosForChatApp from "../config/axios";

export const createMessageAPI = async ({
  roomId,
  message,
}: {
  roomId: number | string;
  message: string;
}): Promise<AxiosResponse<Message>> => {
  return axiosForChatApp.post(`/rooms/${roomId}/messages`, { message });
};

export const deleteMessage = async (
  messageId: string
): Promise<AxiosResponse<{ message: string }>> => {
  return axiosForChatApp.delete(`/messages/${messageId}`);
};
