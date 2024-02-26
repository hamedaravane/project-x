import {NgIf} from '@angular/common';
import {Component, Input} from '@angular/core';
import {AbstractControl, ControlValueAccessor, ReactiveFormsModule} from '@angular/forms';
import {NzFormControlComponent, NzFormItemComponent} from 'ng-zorro-antd/form';
import {NzInputDirective, NzInputGroupComponent} from 'ng-zorro-antd/input';
import {DEFAULT_VALUE_ACCESSOR} from '../value-accessor';

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
  providers: [DEFAULT_VALUE_ACCESSOR],
})
export class EmailInputComponent implements ControlValueAccessor {
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
