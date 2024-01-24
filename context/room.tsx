import React, { ReactNode, createContext, useState } from "react";
import { AxiosError } from "axios";
import { PaginationStateType, paginationInitialState } from "../api";
import { Room } from "../types/room";
import useToggle from "../hooks/useToggle";
import { getRoomsAPI, updateRoomAPI } from "../api/room";

export type RoomContextType = {
  data: PaginationStateType<Room>;
  loading: boolean;
  error: string;
  onNewQuery: (query: string) => void;
  onLoadMore: () => void;
  onUpdate: (roomId: number | string, updateData: { name: string }) => void;
};

export const RoomContext = createContext<RoomContextType>({
  data: paginationInitialState,
  loading: false,
  error: "",
  onNewQuery: () => {},
  onLoadMore: () => {},
  onUpdate: () => {},
});

export const RoomContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<PaginationStateType<Room>>(
    paginationInitialState
  );

  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { toggle, onClose, onOpen } = useToggle();
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
  const handleQuery = (query: string) => {
    onOpen();
    setQuery(query);
    getRoomsAPI({ query, page: 1, per_page: 100 })
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
    getRoomsAPI({ query, page: data.page + 1, per_page: 100 })
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
