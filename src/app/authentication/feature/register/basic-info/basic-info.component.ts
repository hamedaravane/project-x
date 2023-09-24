import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzWaveModule} from 'ng-zorro-antd/core/wave';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import {AsyncPipe, NgClass, NgIf} from '@angular/common';
import {Component, OnInit, inject, DestroyRef} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {
  confirmPasswordValidator,
  strongPasswordValidator,
} from '../../../../shared/data-access/validators/custom-validators';
import {RegisterService} from '../data-access/register.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  imports: [
    FormsModule,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzInputModule,
    NzWaveModule,
    ReactiveFormsModule,
    RouterLink,
    NgIf,
    AsyncPipe,
    NzPopoverModule,
    NgClass,
  ],
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent {
  private readonly router = inject(Router);
  private readonly registerService = inject(RegisterService);
  private readonly destroyRef = inject(DestroyRef);

  userType = this.registerService.UserTypeState;

  basicRegisterInfoForm = new FormGroup(
    {
      email: new FormControl<null | string>(null, [Validators.required, Validators.email]),
      password: new FormControl<null | string>(null, [Validators.required, strongPasswordValidator]),
      confirmPassword: new FormControl<null | string>(null, Validators.required),
    },
    {validators: confirmPasswordValidator},
  );

  email: AbstractControl<null | string> = this.basicRegisterInfoForm.get('email') as AbstractControl<null | string>;
  password: AbstractControl<null | string> = this.basicRegisterInfoForm.get('password') as AbstractControl<
    null | string
  >;
  confirmPassword: AbstractControl<null | string> = this.basicRegisterInfoForm.get(
    'confirmPassword',
  ) as AbstractControl<null | string>;

  isHidePassword = true;
  submitForm() {
    this.userType.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((type) => {
      if (type === 'influencer') {
        this.router.navigateByUrl('/auth/register/influencer-info')
      } else {
        this.router.navigateByUrl('/auth/register/business-info')
      }
    })
  }
}
