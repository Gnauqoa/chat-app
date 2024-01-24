import { io } from "socket.io-client";
import { serverUrl } from "./axios";

export const socket = io(serverUrl, { autoConnect: false });
