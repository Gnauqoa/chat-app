import { useEffect, useState } from "react";
import io from "socket.io-client";
import { serverUrl } from "../config/axios";
import { Message } from "../types/message";
import { PaginationStateType, paginationInitialState } from "../api";
import useToggle from "./useToggle";
import { getMessagesAPI } from "../api/room";

const useMessages = ({ roomId }: { roomId: string }) => {
  const [data, setData] = useState<PaginationStateType<Message>>(
    paginationInitialState
  );
  const [error, setError] = useState<string>("");
  const { toggle, onClose, onOpen } = useToggle();
  useEffect(() => {
    onOpen();
    getMessagesAPI({ roomId, per_page: 100 })
      .then((res) => {
        console.log(res.data.data)
        setData(res.data.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(onClose);
  }, [roomId]);
  useEffect(() => {
    const socket = io(serverUrl);

    socket.on("connect", () => {
      socket.emit(`joinRoom`, { roomId: roomId });
    });
    socket.on("message", (message: Message) => {
      setData((prevState) => ({
        ...prevState,
        items: [...prevState.items, message],
      }));
    });
    return () => {
      socket.disconnect();
    };
  }, [roomId]);
  return { data, error, loading: toggle };
};

export default useMessages;
