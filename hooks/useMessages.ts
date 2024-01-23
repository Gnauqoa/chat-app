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
  const handleLoadMore = () => {
    if (data.page < data.total_pages) {
      onOpen();
      getMessagesAPI({ roomId, per_page: 80, page: data.page + 1 })
        .then((res) => {
          setData((prevState) => ({
            ...prevState,
            items: [...prevState.items, ...res.data.data.items],
          }));
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(onClose);
    }
  };
  useEffect(() => {
    onOpen();
    getMessagesAPI({ roomId, per_page: 80 })
      .then((res) => {
        console.log(res.data.data);
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
  return { data, error, loading: toggle, handleLoadMore };
};

export default useMessages;
