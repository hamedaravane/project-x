import {Component, inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzWaveModule} from "ng-zorro-antd/core/wave";
import {RouterLink} from "@angular/router";
import {AsyncPipe, NgClass, NgIf} from "@angular/common";
import {confirmPasswordValidator, strongPasswordValidator} from "../../../../shared/data-access/validators/custom-validators";
import {NzPopoverModule} from "ng-zorro-antd/popover";
import {RegisterService} from "../data-access/register.service";

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
    NgClass
  ],
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent {
  private readonly registerService = inject(RegisterService);

  userType = this.registerService.UserTypeState;

  basicRegisterInfoForm = new FormGroup({
    email: new FormControl<null | string>(null, [Validators.required, Validators.email]),
    password: new FormControl<null | string>(null, [Validators.required, strongPasswordValidator]),
    confirmPassword: new FormControl<null | string>(null, Validators.required)
  }, { validators: confirmPasswordValidator })

  email: AbstractControl<null | string> = this.basicRegisterInfoForm.get('email') as AbstractControl<null | string>;
  password: AbstractControl<null | string> = this.basicRegisterInfoForm.get('password') as AbstractControl<null | string>;
  confirmPassword: AbstractControl<null | string> = this.basicRegisterInfoForm.get('confirmPassword') as AbstractControl<null | string>;

  isHidePassword = true;
  submitForm() {
    console.log('form submitted');
  }
}
