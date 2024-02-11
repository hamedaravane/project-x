export interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: Date;
}

export type ApiErrorResponse = ApiError | ClientError;

interface ApiError {
  timestamp: string;
  client: false;
  success: false;
  message: string;
  path: string;
  status: number;
  statusText: string;
  url: string | null;
}

interface ClientError {
  timestamp: string;
  client: true;
  success: false;
  message: string;
}
