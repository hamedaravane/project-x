export class ApiResponse<T> {
  isSuccess!: boolean;
  timestamp!: Date;
}

export class ApiSuccessResponse<T> extends ApiResponse<T> {
  data!: T;
}

export class ApiErrorResponse<T> extends ApiResponse<T> {
  error!: ApiError;
}

export interface ApiError {
  status: number;
  code: string;
  text?: string;
  validationErrors?: ValidationError;
  errorData?: {
    [key: string]: string;
  };
}

export interface ValidationError {
  [key: string]: string[];
}

export interface ErrorMap {
  [key: string]: string;
}

export interface ApiErrorMap {
  [key: string]: ErrorMap;
}
