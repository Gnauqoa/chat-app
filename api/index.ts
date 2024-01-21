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