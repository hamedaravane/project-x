import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {InputType, InputTypeEnum, transformInputTypeToEnum} from '../../data-access/entity/purple-form.entity';

@Component({
  selector: 'purple-form-input',
  imports: [],
  templateUrl: 'input.component.html',
  styleUrl: './input.component.scss',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input({
      required: true,
      alias: 'type',
      transform: transformInputTypeToEnum
  }) inputType: InputTypeEnum;

  INPUT_TYPE_ENUM = InputTypeEnum;
  formControlValue: string;
  _isDisabled = false;
  public _onChange(value: any) {
    this.formControlValue = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: (value: any) => void): void {
    this._onChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.formControlValue = obj;
  }
}
