export interface ApiResponse<T> {
  success: boolean;
  code: number | string;
  message: string;
  data: T;
  error: any;
}
