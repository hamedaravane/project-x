import {confirmPasswordValidator, strongPasswordValidator} from '@shared/data-access/validators/custom-validators';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import {NgClass, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  imports: [
    NgIf,
    NzButtonModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzPopoverModule,
    ReactiveFormsModule,
    RouterLink,
    NgClass,
  ],
  styleUrls: ['./set-new-password.component.scss'],
})
export class SetNewPasswordComponent {
  private readonly router = inject(Router);
  newPassForm = new FormGroup(
    {
      password: new FormControl<null | string>(null, [Validators.required, strongPasswordValidator]),
      confirmPassword: new FormControl<null | string>(null, Validators.required),
    },
    {validators: confirmPasswordValidator},
  );

  password: AbstractControl<null | string> = this.newPassForm.get('password') as AbstractControl<null | string>;
  confirmPassword: AbstractControl<null | string> = this.newPassForm.get('confirmPassword') as AbstractControl<
    null | string
  >;

  isHidePassword = true;

  submitForm() {
    console.log('salam');
    this.router.navigateByUrl('/auth/login');
  }
}
