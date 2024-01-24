import { createMessageAPI } from "./../api/message";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { serverUrl } from "../config/axios";
import { Message } from "../types/message";
import { PaginationStateType, paginationInitialState } from "../api";
import useToggle from "./useToggle";
import { getMessagesAPI } from "../api/room";

const useSendMessage = () => {
  const [data, setData] = useState<PaginationStateType<Message>>(
    paginationInitialState
  );
  const [error, setError] = useState<string>("");
  const { toggle, onClose, onOpen } = useToggle();
  const sendMessage = ({
    message,
    roomId,
  }: {
    message: string;
    roomId: number | string;
  }) => {
    onOpen();
    createMessageAPI({ message, roomId }).finally(onClose);
  };

  return { data, error, loading: toggle, sendMessage };
};

export default useSendMessage;
