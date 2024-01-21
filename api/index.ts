export type PaginationResponseType<T> = {
  data: {
    per_page: number;
    page: number;
    total_pages: number;
    total_items: number;
    items: T[];
  };
};
export type DataResponseType<T> = {
  data: T;
};
export type PaginationStateType<T> = {
  items: T[];
  total_items: number;
  total_pages: number;
  page: number;
  per_page: number;
};
export type PaginationParamsType = {
  per_page?: number;
  page?: number;
};

export const paginationInitialState = {
  items: [],
  total_items: 0,
  total_pages: 0,
  page: 0,
  per_page: 0,
};
