import {inject, Injectable} from '@angular/core';


import {HttpClient} from '@angular/common/http';
import {ApiResponse} from 'src/app/base/data-access/models/api-response.model';

@Injectable({
  providedIn: 'root',
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
    if (res.success) {
      const data = converterFn(res.data);
      console.log('in success: ', res);
      return {
        success: true,
        data,
        timestamp: res.timestamp
      };
    } else {
      console.log('in error: ', res);
      return {
        success: false,
        error: res.error
      };
    }
  }
}
