import { useEffect, useState } from "react";
import { Message } from "../types/message";
import {
  DataResponseType,
  PaginationStateType,
  paginationInitialState,
} from "../api";
import useToggle from "./useToggle";
import { getMessagesAPI } from "../api/room";
import { socket } from "../config/socket.io";

const perPage = 15

const useMessages = ({ roomId }: { roomId: string }) => {
  const [data, setData] = useState<PaginationStateType<Message>>(
    paginationInitialState
  );
  const [error, setError] = useState<string>("");
  const { toggle, onClose, onOpen } = useToggle();
  const handleLoadMore = () => {
    if (data.page < data.total_pages && !toggle) {
      onOpen();
      getMessagesAPI({ roomId, per_page: perPage, page: data.page + 1 })
        .then((res) => {
          setData((prevState) => ({
            ...res.data.data,
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
    getMessagesAPI({ roomId, per_page: perPage })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(onClose);
  }, [roomId]);

  useEffect(() => {
    socket.connect();
    function onNewMessage(newMessage: DataResponseType<Message>) {
      setData((prevState) => ({
        ...prevState,
        items: [newMessage.data, ...prevState.items],
      }));
    }
    function onConnect() {
      console.log("connected");
    }
    function onDisconnect() {
      console.log("disconnected");
    }

    socket.emit(`joinRoom`, { roomId: roomId });
    socket.on("newMessage", onNewMessage);
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    return () => {
      socket.disconnect();
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("newMessage", onNewMessage);
    };
  }, []);

  return { data, error, loading: toggle, handleLoadMore };
};

export default useMessages;
