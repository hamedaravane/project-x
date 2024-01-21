export type ApiResponse<T> = ApiError | ApiSuccess<T>;

interface ApiError {
  success: false;
  error: {
    code: number;
    message: string;
  }
}

interface ApiSuccess<T> {
  success: true;
  data: T;
  timestamp: Date;
}
