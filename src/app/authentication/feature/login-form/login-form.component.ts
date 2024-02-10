import {AsyncPipe, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {LoginEntity} from '@authentication/data-access/model/auth.model';
import {LoginService} from '@authentication/data-access/login.service';
import {NzMessageModule} from 'ng-zorro-antd/message';

@Component({
  standalone: true,
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  imports: [
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NgIf,
    NzCheckboxModule,
    NzLayoutModule,
    NzButtonModule,
    RouterLink,
    AsyncPipe,
    NzMessageModule
  ],
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  private readonly loginService = inject(LoginService);
  isLoading$ = this.loginService.isLoadingLogin$;
  // TODO: implement error for login
  showLoginError$ = this.loginService.hasLoginError$;
  loginFrom = new FormGroup({
    email: new FormControl<null | string>(null, [Validators.required, Validators.email]),
    password: new FormControl<null | string>(null, Validators.required),
    rememberMe: new FormControl<boolean>(false),
  });

  emailControl = this.loginFrom.controls.email as AbstractControl<string>;
  passwordControl = this.loginFrom.controls.password as AbstractControl<string>;
  rememberMeControl = this.loginFrom.controls.rememberMe as AbstractControl<boolean>;

  isHidePassword = true;

  submitLoginForm(): void {
    this.loginService.login(this.loginFrom.value as LoginEntity);
  }
}
