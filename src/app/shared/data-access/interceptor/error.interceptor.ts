import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.error instanceof ErrorEvent) {
          throw {
            timestamp: new Date().toISOString(),
            client: true,
            success: false,
            message: err.error.message
          };
        } else {
          throw {
            path: err.error.path,
            timestamp: err.error.timestamp,
            status: err.status,
            statusText: err.statusText,
            client: false,
            url: err.url,
            success: err.ok,
            message: err.message
          };
        }
      })
    );
  }
}
