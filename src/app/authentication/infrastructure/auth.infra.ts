import {Inject, Injectable} from '@angular/core';
import {CreateUserDto, UserDto, userDtoToEntity, UserEntity} from '@user/data-access/model/user.model';
import {BaseInfraService} from '@shared/data-access/base-infra.service';
import {ApiResponse} from '@shared/data-access/models/api-response.model';
import {Observable, map, catchError, throwError, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInfra extends BaseInfraService {
  constructor(@Inject('API_URL') private apiUrl: string) {
    super();
  }

  /**
   * @description send registration form to backend.
   * @param {CreateUserDto} data - user register form.
   * @returns {Observable<ApiResponse<UserEntity>>} - void.
   * @author Hamed Arghavan
   *
   * @example
   * this._authInfra.register(data);
   */
  register(data: CreateUserDto): Observable<ApiResponse<UserEntity>> {
    return this.http.post<ApiResponse<UserDto>>(`${this.apiUrl}/users/create`, data).pipe(
      map((res) => {
        return this.convertWithApiResponse(res, userDtoToEntity);
      }),
    );
  }

  uploadProfilePhoto(data: FormData): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(`${this.apiUrl}/users/photo`, data).pipe(
      map(res => {
        return this.convertWithApiResponse(res, (): void => {});
      })
    );
  }

  login(email: string, password: string): Observable<ApiResponse<UserEntity>> {
    return this.http
      .post<ApiResponse<UserDto>>(`${this.apiUrl}/users/login`, { email, password })
      .pipe(
        map(res => {
          return this.convertWithApiResponse(res, userDtoToEntity);
        })
      );
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
