import {inject, Injectable} from '@angular/core';


import {HttpClient} from '@angular/common/http';
import {ApiResponse} from '@shared/data-access/models/api-response.model';
import {catchError, of} from 'rxjs';
import {log} from 'ng-zorro-antd/core/logger';

@Injectable({
  providedIn: 'root'
})
export class BaseInfraService {
  protected readonly http = inject(HttpClient);

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
      timestamp: res.timestamp
    };
  }
}
