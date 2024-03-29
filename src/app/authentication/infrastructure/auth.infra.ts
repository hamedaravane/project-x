import {Injectable} from '@angular/core';
import {CreateUserDto, UserDto, UserEntity, userDtoToEntity} from '@user/data-access/model/user.model';
import {LoginResponse, convertToLoginRes} from '@authentication/data-access/model/auth.model';
import {BaseInfraService} from '@shared/data-access/base-infra.service';
import {ApiResponse} from '@shared/data-access/models/api-response.model';
import {Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInfra extends BaseInfraService {
  register(data: CreateUserDto): Promise<ApiResponse<UserEntity>> {
    return this.post<UserDto, UserEntity>('/users/create', data, userDtoToEntity);
  }

  uploadProfilePhoto(data: FormData): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(`${this.apiUrl}/users/photo`, data).pipe(
      map(res => {
        return this.convertWithApiResponse(res, (): void => {});
      }),
    );
  }

  login(email: string, password: string): Promise<ApiResponse<LoginResponse>> {
    return this.post<LoginResponse, LoginResponse>('/users/login', {email, password}, convertToLoginRes);
  }
}
