import {inject, Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, EMPTY, Observable, throwError} from 'rxjs';
import {TokenStorageService} from '@authentication/data-access/token-storage.service';
import {LoginService} from '@authentication/data-access/login.service';

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor{
  private readonly tokenStorageService = inject(TokenStorageService);
  private readonly loginService = inject(LoginService);
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken = this.tokenStorageService.getAccessToken();

    if (accessToken) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${accessToken}` },
        // !Attention: it used only at Fake API, remove it in real app
        params: req.params.set('auth-token', accessToken),
      });
    }

    return next.handle(req).pipe(s => this.handleErrors(s, req.url));
  }

  private handleErrors(
    source: Observable<HttpEvent<unknown>>,
    urlPath: string
  ): Observable<HttpEvent<unknown>> {
    return source.pipe(
      catchError((error: HttpErrorResponse) => {
        // try to avoid errors on logout
        // therefore we check the url path of '/auth/'
        if (error.status === 401 && !urlPath.includes('/auth/')) {
          return this.handle401();
        }

        // rethrow error
        return throwError(() => error);
      })
    );
  }

  private handle401(): Observable<never> {
    this.loginService.logout();
    return EMPTY;
  }
}
