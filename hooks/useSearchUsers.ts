import { useState } from "react";
import { PaginationStateType, paginationInitialState } from "../api";
import useToggle from "./useToggle";
import { searchUserAPI } from "../api/user";
import { User } from "../types/user";
import { AxiosError } from "axios";

const perPage = 100;

const useSearchUsers = () => {
  const [data, setData] = useState<PaginationStateType<User>>(
    paginationInitialState
  );
  const [error, setError] = useState<string>("");
  const { toggle, onClose, onOpen } = useToggle();
  const [query, setQuery] = useState<string>("");

  const handleQuery = (query: string) => {
    onOpen();
    setQuery(query);
    searchUserAPI({ name: query, page: 1, per_page: perPage })
      .then((response) => {
        console.log(response.data.data)
        setData(response.data.data);
      })
      .catch((error: AxiosError) => {
        setError(error.message);
      })
      .finally(onClose);
  };
  const handleLoadMore = () => {
    if (data.page < data.total_pages && !toggle) {
      onOpen();
      searchUserAPI({ name: query, per_page: perPage, page: data.page + 1 })
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

  return { data, error, loading: toggle, handleLoadMore, handleQuery };
};

export default useSearchUsers;
