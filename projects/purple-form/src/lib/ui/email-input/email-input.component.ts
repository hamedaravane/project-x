import {Component, Input} from '@angular/core';
import {NzInputDirective, NzInputGroupComponent} from 'ng-zorro-antd/input';
import {NzFormControlComponent, NzFormItemComponent} from 'ng-zorro-antd/form';
import {NgIf} from '@angular/common';
import {AbstractControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  templateUrl: 'email-input.component.html',
  standalone: true,
  imports: [
    NzInputDirective,
    NzInputGroupComponent,
    NzFormItemComponent,
    NzFormControlComponent,
    NgIf,
    ReactiveFormsModule,
  ],
  selector: 'purple-form-email-input',
})
export class EmailInputComponent {
  @Input({required: true}) emailControl!: AbstractControl;
}
