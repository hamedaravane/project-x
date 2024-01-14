import {AsyncPipe, NgClass, NgIf} from '@angular/common';
import {Component, DestroyRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {UserTypeDetail} from '@user/data-access/model/user.model';
import {RegisterService} from '@authentication/data-access/register.service';
import {confirmPasswordValidator, strongPasswordValidator} from '@shared/data-access/validators/custom-validators';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzWaveModule} from 'ng-zorro-antd/core/wave';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import {Observable} from 'rxjs';

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
  isHidePassword = true;
  userType$: Observable<UserTypeDetail> = this.registerService.userType$;

  basicRegisterInfoForm = new FormGroup(
    {
      email: new FormControl<null | string>(null, [Validators.required, Validators.email]),
      password: new FormControl<null | string>(null, [Validators.required, strongPasswordValidator]),
      confirmPassword: new FormControl<null | string>(null, Validators.required),
    },
    {validators: confirmPasswordValidator},
  );

  emailControl = this.basicRegisterInfoForm.get('email') as AbstractControl<null | string>;
  passwordControl = this.basicRegisterInfoForm.get('password') as AbstractControl<null | string>;
  confirmPasswordControl = this.basicRegisterInfoForm.get('confirmPassword') as AbstractControl<null | string>;

  submitForm(): void {
    if (this.emailControl.value && this.passwordControl.value) {
      this.registerService.userAuthInfo$ = {email: this.emailControl.value, password: this.passwordControl.value};
    }
    this.userType$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(type => {
      if (type.value === 'influencer') {
        this.router.navigateByUrl('/auth/register/influencer-info').then();
      } else {
        this.router.navigateByUrl('/auth/register/business-info').then();
      }
    });
  }
}
