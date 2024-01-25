import React, { ReactNode, createContext, useState } from "react";
import { AxiosError } from "axios";
import { PaginationStateType, paginationInitialState } from "../api";
import { Room } from "../types/room";
import useToggle from "../hooks/useToggle";
import { createRoomAPI, getRoomsAPI, updateRoomAPI } from "../api/room";
import { useRouter } from "expo-router";

const perPage = 100;

export type RoomContextType = {
  data: PaginationStateType<Room>;
  loading: boolean;
  error: string;
  onNewQuery: (query: string) => void;
  onLoadMore: () => void;
  onUpdate: (roomId: number | string, updateData: { name: string }) => void;
  onReload: () => void;
  handleCreateRoom: ({}: { name: string; users: { id: string }[] }) => void;
};

export const RoomContext = createContext<RoomContextType>({
  data: paginationInitialState,
  loading: false,
  error: "",
  onNewQuery: () => {},
  onLoadMore: () => {},
  onUpdate: () => {},
  onReload: () => {},
  handleCreateRoom: () => {},
});

export const RoomContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<PaginationStateType<Room>>(
    paginationInitialState
  );
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { toggle, onClose, onOpen } = useToggle();

  const handleReload = () => handleQuery(query);
  const handleUpdate = (
    roomId: number | string,
    updateData: { name: string }
  ) => {
    updateRoomAPI({ roomId, data: updateData }).then((response) => {
      const index = data.items.findIndex(
        (item) => item.id.toString() === roomId.toString()
      );
      if (index === -1) return;
      setData((prev) => ({
        ...prev,
        items: [
          ...prev.items.slice(0, index),
          response.data.data,
          ...prev.items.slice(index + 1),
        ],
      }));
    });
  };
  const handleCreateRoom = ({
    name,
    users,
  }: {
    name: string;
    users: { id: string }[];
  }) => {
    createRoomAPI({ name, users }).then((response) => {
      console.log(response)
      router.replace(`/${response.data.data.id.toString()}`);
      setData((prev) => ({
        ...prev,
        items: [...prev.items, response.data.data],
      }));
    });
  };
  const handleQuery = (query: string) => {
    onOpen();
    setQuery(query);
    getRoomsAPI({ query, page: 1, per_page: perPage })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error: AxiosError) => {
        setError(error.message);
      })
      .finally(onClose);
  };

  const handleLoadMore = () => {
    onOpen();
    getRoomsAPI({ query, page: data.page + 1, per_page: perPage })
      .then((response) => {
        setData((prev) => ({
          items: [...prev.items, ...response.data.data.items],
          page: response.data.data.page,
          per_page: response.data.data.per_page,
          total_items: response.data.data.total_items,
          total_pages: response.data.data.total_pages,
        }));
      })
      .catch((error: AxiosError) => {
        setError(error.message);
      })
      .finally(onClose);
  };
  return (
    <RoomContext.Provider
      value={{
        onReload: handleReload,
        handleCreateRoom,
        data,
        loading: toggle,
        error,
        onUpdate: handleUpdate,
        onNewQuery: handleQuery,
        onLoadMore: handleLoadMore,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
