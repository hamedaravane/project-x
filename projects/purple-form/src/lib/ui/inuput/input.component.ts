import {Component, Input, TemplateRef, ViewChild, computed, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {NzInputDirective, NzInputGroupComponent} from 'ng-zorro-antd/input';
import {
  InputType,
  InputTypeEnum,
  generateInputBasedOnType,
  placeholderGeneratorBasedOnInputTypeEnum,
  transformInputTypeToEnum,
} from '../../data-access/entity/purple-form.entity';

@Component({
  selector: 'purple-form-input',
  imports: [NzInputGroupComponent, NzInputDirective],
  templateUrl: 'input.component.html',
  styleUrl: './input.component.scss',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input({
    required: true,
    transform: transformInputTypeToEnum,
  })
  inputType!: InputTypeEnum;
  @ViewChild('prefixIcon', {read: TemplateRef}) prefixIconRef!: TemplateRef<void>;
  @ViewChild('suffixIcon', {read: TemplateRef}) suffixIconRef!: TemplateRef<void>;
  @ViewChild('addOnAfter', {read: TemplateRef}) addOnAfterRef!: TemplateRef<void>;
  @ViewChild('addOnBefore', {read: TemplateRef}) addOnBeforeRef!: TemplateRef<void>;
  INPUT_TYPE_ENUM = InputTypeEnum;
  formControlValue!: string;
  _isDisabled = false;
  _input = computed(() => {
    return generateInputBasedOnType(
      this.inputType,
      this.prefixIconRef,
      this.suffixIconRef,
      this.addOnAfterRef,
      this.addOnBeforeRef,
    );
  });
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
