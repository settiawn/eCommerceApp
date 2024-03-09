export type ServerResponse<T> = {
  message?: string;
  meta?: Meta;
  error?: string;
  data?: T | null;
};

export interface Meta {
  currentPage: number;
  totalPage: number;
  dataPerPage: number;
  totalData: number;
}
