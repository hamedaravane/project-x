import {UserDto} from '@user/data-access/model/user.model';

export interface LoginEntity {
  email: string,
  password: string,
  rememberMe: boolean
}

export interface LoginResponse {
  message: string;
  token: string;
  user: UserDto;
}

export function convertToLoginRes(data: LoginResponse): LoginResponse {
  return {
    message: data.message,
    token: data.token,
  };
}
