import {HttpClient} from '@angular/common/http';
import {Inject, Injectable, inject} from '@angular/core';
import {ApiResponse} from '@shared/data-access/models/api-response.model';
import {Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInfra {
  constructor(@Inject('API_URL') private apiUrl: string) {}
  private readonly http = inject(HttpClient);
  register(data: any): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(`${this.apiUrl}/user/register`, data).pipe(
      map(res => {
        return res;
      }),
    );
  }
}
