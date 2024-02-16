export interface LoginEntity {
  email: string,
  password: string,
  rememberMe: boolean
}

export interface LoginResponse {
  message: string;
  token: string;
}
