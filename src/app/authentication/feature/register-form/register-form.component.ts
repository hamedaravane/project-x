import { Component } from '@angular/core';
import {NzStepsModule} from "ng-zorro-antd/steps";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzGridModule} from "ng-zorro-antd/grid";

@Component({
  standalone: true,
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  imports: [
    NzStepsModule,
    NzCardModule,
    NzGridModule
  ],
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  currentStep = 0;

  nextStep() {
    this.currentStep++;
  }

  prevStep() {
    this.currentStep--;
  }
}
