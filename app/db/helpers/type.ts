export type ServerResponse<T> = {
  message?: string;
  error?: string;
  data?: T | null;
};
