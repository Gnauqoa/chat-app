export type PaginationResponseType<T> = {
  per_page: number;
  page: number;
  total_pages: number;
  total_items: number;
  items: T[];
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
