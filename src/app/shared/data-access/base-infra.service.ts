import {Inject, inject, Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {ApiResponse} from '@shared/data-access/models/api-response.model';
import {firstValueFrom, map} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseInfraService {
  protected readonly http = inject(HttpClient);
  constructor(@Inject('API_URL') protected apiUrl: string) {
  }

  /**
   * Converts API response data using the provided converter function.
   * @param res The original API response.
   * @param converterFn The function to convert the source data to the destination format.
   * @returns Converted API response.
   * @author Hamed Arghavan
   */
  protected convertWithApiResponse<SRC, DEC>(res: ApiResponse<SRC>, converterFn: (data: SRC) => (DEC)): ApiResponse<DEC> {
    const data = converterFn(res.data);
    return {
      success: true,
      data,
      timestamp: res.timestamp,
    };
  }

  protected async get<SRC, DEC>(url: string, converterFn: (data: SRC) => (DEC)): Promise<ApiResponse<DEC>> {
    return await firstValueFrom(this.http.get<ApiResponse<SRC>>(this.apiUrl + url).pipe(
      map(res => {
        return this.convertWithApiResponse(res, converterFn);
      }),
    ));
  }

  protected async post<SRC, DEC>(url: string, body: any | null, converterFn: (data: SRC) => (DEC)): Promise<ApiResponse<DEC>> {
    return firstValueFrom(this.http.post<ApiResponse<SRC>>(this.apiUrl + url, body).pipe(
      map((res) => {
        return this.convertWithApiResponse(res, converterFn);
      })),
    );
  }
}
