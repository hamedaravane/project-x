import {inject, Injectable} from '@angular/core';
import {AuthInfra} from '@authentication/infrastructure/auth.infra';
import {BehaviorSubject, firstValueFrom} from 'rxjs';
import {LoginEntity} from '@authentication/data-access/model/auth.model';

@Injectable({providedIn: 'root'})
export class LoginService {
  private readonly authInfra = inject(AuthInfra);
  private readonly tokenKey = 'authToken';
  private readonly userKey = 'currentUser';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  authSubject$ = new BehaviorSubject<string | null>(null);
  userSubject$ = new BehaviorSubject<string | null>(null);
  isLoggedInSubject$ = new BehaviorSubject<string | null>(null);
  isLoadingLoginSubject$ = new BehaviorSubject<string | null>(null);
  hasLoginErrorSubject$ = new BehaviorSubject<string | null>(null);

  auth$ = this.authSubject$.asObservable();
  user$ = this.userSubject$.asObservable();
  isLoggedIn$ = this.isLoggedInSubject$.asObservable();
  isLoadingLogin$ = this.isLoadingLoginSubject$.asObservable();
  hasLoginError$ = this.hasLoginErrorSubject$.asObservable();

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
  login(data: LoginEntity): void {
    this._login(data).then();
  }

  private async _login(data: LoginEntity): Promise<void> {
    const res = await firstValueFrom(this.authInfra.login(data.email, data.password));
    if (res.isSuccess) {
      const storage = data.rememberMe ? localStorage : sessionStorage;
      storage.setItem(this.tokenKey, res.token);
      storage.setItem(this.userKey, JSON.stringify(res.user));
      this.isAuthenticatedSubject.next(true);
    }
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.userKey);
    this.isAuthenticatedSubject.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey) || sessionStorage.getItem(this.tokenKey);
  }

  getCurrentUser(): any | null {
    const userJson = localStorage.getItem(this.userKey) || sessionStorage.getItem(this.userKey);
    return userJson ? JSON.parse(userJson) : null;
  }
}