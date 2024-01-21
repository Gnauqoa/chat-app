import { AxiosResponse } from "axios";
import { PaginationParamsType, PaginationResponseType } from ".";
import { Room } from "../types/room";
import axiosForChatApp from "../config/axios";

export function getRoomsAPI(
  params: PaginationParamsType & {
    query: string;
  }
): Promise<AxiosResponse<PaginationResponseType<Room>>> {
  return axiosForChatApp.get(`/rooms`, { params });
}
