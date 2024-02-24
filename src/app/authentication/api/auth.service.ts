import {Injectable, inject} from '@angular/core';
import {LoginService} from 'src/app/authentication/data-access/login.service';

@Injectable({providedIn: 'root'})
export class AuthService {
  private loginService = inject(LoginService);
  getCurrentUser(): void {
    this.loginService.getCurrentUser();
  }
}
