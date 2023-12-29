import {Injectable} from '@angular/core';
import {
  ApiErrorResponse,
  ApiResponse,
  ApiSuccessResponse,
  ErrorMap,
} from '@shared/data-access/models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class BaseInfraService {
  constructor() {}
  protected convertWithApiResponse<SRC, DES>(input: any, convertFunction: (src: SRC) => DES): ApiResponse<DES> {
    if (input instanceof ApiErrorResponse) {
      return input as ApiErrorResponse<DES>;
    } else {
      const des = convertFunction.call(null, input);
      const success: ApiSuccessResponse<DES> = {
        isSuccess: true,
        timestamp: new Date(),
        data: des,
      };
      return success;
    }
  }

  /**
   * @deprecated
   * @param input
   * @param errorMap
   * @param convertFunction
   * @protected
   */
  protected convertWithApiResponseWithError<SRC, DES>(
    input: any,
    errorMap: ErrorMap,
    convertFunction: (src: SRC) => DES,
  ): ApiResponse<DES> {
    if (input instanceof ApiErrorResponse) {
      input.error.code;
      return input as ApiErrorResponse<DES>;
    } else {
      const des = convertFunction.call(null, input);
      const success: ApiSuccessResponse<DES> = {
        isSuccess: true,
        timestamp: new Date(),
        data: des,
      };
      return success;
    }
  }
}
