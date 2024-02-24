import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, catchError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse): Observable<never> => {
        throw {
          path: err.error.path,
          timestamp: err.error.timestamp,
          status: err.status,
          statusText: err.statusText,
          url: err.url,
          client: false,
          success: err.ok,
          message: err.message,
        };
      }),
    );
  }
}
