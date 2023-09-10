import {Component, inject} from '@angular/core';
import {NzFormModule} from "ng-zorro-antd/form";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe, NgIf} from "@angular/common";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzTransitionPatchModule} from "ng-zorro-antd/core/transition-patch/transition-patch.module";
import {RegisterService} from "../data-access/register.service";

@Component({
  standalone: true,
  selector: 'app-business-info-form',
  templateUrl: './business-info-form.component.html',
  imports: [
    NzFormModule,
    ReactiveFormsModule,
    AsyncPipe,
    NzInputModule,
    NzTransitionPatchModule,
    NgIf
  ],
  styleUrls: ['./business-info-form.component.scss']
})
export class BusinessInfoFormComponent {
  registerService = inject(RegisterService);
  userType = this.registerService.UserTypeState;

  businessInfoForm = new FormGroup({

  })

  submitForm() {
    console.log('businessInfoForm submitted')
  }

}
