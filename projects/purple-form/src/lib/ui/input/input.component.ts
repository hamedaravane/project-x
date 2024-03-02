import {Component, Input, TemplateRef, ViewChild, computed, forwardRef, AfterViewInit, Signal, ContentChild} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {NzInputDirective, NzInputGroupComponent} from 'ng-zorro-antd/input';
import {
  InputTypeEnum,
  transformInputTypeToEnum, InputMetrics,
} from '../../data-access/entity/purple-form.entity';
import {NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'purple-form-input',
  imports: [NzInputGroupComponent, NzInputDirective, NgTemplateOutlet],
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
  @ViewChild('prefixIcon', {read: TemplateRef}) prefixIconRef!: TemplateRef<void> | undefined;
  @ViewChild('suffixIcon', {read: TemplateRef}) suffixIconRef!: TemplateRef<void> | undefined;
  @ViewChild('addOnAfter', {read: TemplateRef}) addOnAfterRef!: TemplateRef<void> | undefined;
  @ViewChild('addOnBefore', {read: TemplateRef}) addOnBeforeRef!: TemplateRef<void> | undefined;
  INPUT_TYPE_ENUM = InputTypeEnum;
  formControlValue!: string;
  _isDisabled = false;
  input = computed(() => this.generateInputBasedOnType(this.inputType));

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

  generateInputBasedOnType(value: InputTypeEnum): InputMetrics {
    switch (value) {
      case InputTypeEnum.email_validator:
        return {
          prefixTemplateRef: this.prefixIconRef,
          prefixIcon: 'fa-solid fa-envelope',
          suffixIcon: undefined,
          label: 'آدرس ایمیل',
          placeholder: 'sample@email.com',
        };
      case InputTypeEnum.password_getter:
        return {
          prefixTemplateRef: this.prefixIconRef,
          prefixIcon: 'fa-solid fa-envelope',
          suffixIcon: undefined,
          label: 'آدرس ایمیل',
          placeholder: 'sample@email.com',
        };
      case InputTypeEnum.password_validator:
        return {
          prefixTemplateRef: this.prefixIconRef,
          prefixIcon: 'fa-solid fa-envelope',
          suffixIcon: undefined,
          label: 'آدرس ایمیل',
          placeholder: 'sample@email.com',
        };
      case InputTypeEnum.password_confirmation:
        return {
          prefixTemplateRef: this.prefixIconRef,
          prefixIcon: 'fa-solid fa-envelope',
          suffixIcon: undefined,
          label: 'آدرس ایمیل',
          placeholder: 'sample@email.com',
        };
      case InputTypeEnum.mobile:
        return {
          prefixTemplateRef: this.prefixIconRef,
          prefixIcon: 'fa-solid fa-envelope',
          suffixIcon: undefined,
          label: 'آدرس ایمیل',
          placeholder: 'sample@email.com',
        };
      case InputTypeEnum.home_phone:
        return {
          prefixTemplateRef: this.prefixIconRef,
          prefixIcon: 'fa-solid fa-envelope',
          suffixIcon: undefined,
          label: 'آدرس ایمیل',
          placeholder: 'sample@email.com',
        };
      case InputTypeEnum.english_text:
        return {
          prefixTemplateRef: this.prefixIconRef,
          prefixIcon: 'fa-solid fa-envelope',
          suffixIcon: undefined,
          label: 'آدرس ایمیل',
          placeholder: 'sample@email.com',
        };
      case InputTypeEnum.persian_text:
        return {
          prefixTemplateRef: this.prefixIconRef,
          prefixIcon: 'fa-solid fa-envelope',
          suffixIcon: undefined,
          label: 'آدرس ایمیل',
          placeholder: 'sample@email.com',
        };
      case InputTypeEnum.address:
        return {
          prefixTemplateRef: this.prefixIconRef,
          prefixIcon: 'fa-solid fa-envelope',
          suffixIcon: undefined,
          label: 'آدرس ایمیل',
          placeholder: 'sample@email.com',
        };
      case InputTypeEnum.email_getter:
        return {
          prefixTemplateRef: this.prefixIconRef,
          prefixIcon: 'fa-solid fa-envelope',
          suffixIcon: undefined,
          label: 'آدرس ایمیل',
          placeholder: 'sample@email.com',
        };
    }
  }
}
