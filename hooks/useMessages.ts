import { useEffect } from "react";
import io from "socket.io-client";
import { serverUrl } from "../config/axios";

const useMessages = ({ roomId }: { roomId: string }) => {
  useEffect(() => {
    const socket = io(serverUrl);

    socket.on("connect", () => {
      socket.emit(`room-${roomId}`, "Hello from client!");
    });

    return () => {
      socket.disconnect();
    };
  }, [roomId]);
};


export default useMessages