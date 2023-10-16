import {NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {ForgotPasswordService} from '../data-access/forgot-password.service';

@Component({
  standalone: true,
  selector: 'app-enter-email',
  templateUrl: './enter-email.component.html',
  imports: [NzFormModule, ReactiveFormsModule, NzInputModule, NgIf, NzButtonModule, RouterLink],
  styleUrls: ['./enter-email.component.scss'],
})
export class EnterEmailComponent {
  private readonly forgotPasswordService = inject(ForgotPasswordService);
  private readonly router = inject(Router);

  forgetPassForm = new FormGroup({
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    lastRememberedPass: new FormControl<string | null>(null),
  });

  email = this.forgetPassForm.get('email') as AbstractControl<string | null>;
  lastRememberedPass = this.forgetPassForm.get('lastRememberedPass') as AbstractControl<string | null>;

  isHidePassword = false;

  submit(): void {
    this.forgotPasswordService.setForgottenPassEmail(this.email.value);
    this.router.navigate(['/', 'auth', 'forget-password', 'enter-code']);
    console.log('forget pass');
  }
}
