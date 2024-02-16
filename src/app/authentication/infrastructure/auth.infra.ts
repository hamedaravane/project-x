import { Injectable} from '@angular/core';
import {CreateUserDto, UserDto, userDtoToEntity, UserEntity} from '@user/data-access/model/user.model';
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
      })
    );
  }

  login(email: string, password: string): Promise<ApiResponse<LoginResponse>> {
    return this.post<UserDto, LoginResponse>('/users/login', { email, password }, userDtoToEntity);
  }

  getProfilePhoto(uuid: string): Observable<ApiResponse<{profilePhotoSrc: string}>> {
    return this.http.get<ApiResponse<{profile_photo_src: string}>>(`${this.apiUrl}/users/${uuid}/photo`)
      .pipe(
        map(res => {
          return this.convertWithApiResponse(res, (res): {profilePhotoSrc: string} => {
            return {profilePhotoSrc: res.profile_photo_src};
          });
        })
      );
  }
}
