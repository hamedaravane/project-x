import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzLayoutModule} from 'ng-zorro-antd/layout';

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
  ],
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginFrom = new FormGroup({
    email: new FormControl<null | string>(null, [Validators.required, Validators.email]),
    password: new FormControl<null | string>(null, Validators.required),
    rememberMe: new FormControl<boolean>(false),
  });

  email: AbstractControl<null | string> = this.loginFrom.get('email') as AbstractControl<null | string>;
  password: AbstractControl<null | string> = this.loginFrom.get('password') as AbstractControl<null | string>;
  rememberMe: AbstractControl<boolean> = this.loginFrom.get('rememberMe') as AbstractControl<boolean>;

  isHidePassword = true;

  submitLoginForm(): void {
    console.log('form submitted');
  }
}
