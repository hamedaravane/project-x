import {HttpClient} from '@angular/common/http';
import {Injectable, inject} from '@angular/core';
import {ApiResponse} from '@shared/data-access/models/api-response.model';
import {Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInfra {
  private readonly http = inject(HttpClient);

  register(data: any): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>('', data).pipe(
      map(res => {
        return res;
      }),
    );
  }
}
