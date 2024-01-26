import { User } from "./user";

export type Message = {
  id: number;
  message: string;
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
  userId: number;
  user: User;
  roomId: number;
};
