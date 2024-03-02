import {ElementRef, EmbeddedViewRef, Injector, TemplateRef} from '@angular/core';

export type InputType =
  | 'email-getter'
  | 'email-validator'
  | 'password-getter'
  | 'password-validator'
  | 'password-confirmation'
  | 'mobile'
  | 'home-phone'
  | 'address'
  | 'persian-text'
  | 'english-text';

export enum InputTypeEnum {
  email_getter,
  email_validator,
  password_getter,
  password_validator,
  password_confirmation,
  mobile,
  home_phone,
  address,
  persian_text,
  english_text,
}

export function transformInputTypeToEnum(value: InputType): InputTypeEnum {
  switch (value) {
    case 'email-validator':
      return InputTypeEnum.email_validator;
    case 'password-getter':
      return InputTypeEnum.password_getter;
    case 'password-validator':
      return InputTypeEnum.password_validator;
    case 'password-confirmation':
      return InputTypeEnum.password_confirmation;
    case 'mobile':
      return InputTypeEnum.mobile;
    case 'home-phone':
      return InputTypeEnum.home_phone;
    case 'english-text':
      return InputTypeEnum.english_text;
    case 'persian-text':
      return InputTypeEnum.persian_text;
    case 'address':
      return InputTypeEnum.address;
    default:
      return InputTypeEnum.email_getter;
  }
}

export function placeholderGeneratorBasedOnInputTypeEnum(enumValue: InputTypeEnum): string {
  switch (enumValue) {
    case InputTypeEnum.email_validator:
      return 'آدرس ایمیل';
    case InputTypeEnum.password_getter:
      return 'کلمه عبور';
    case InputTypeEnum.password_validator:
      return 'کلمه عبور';
    case InputTypeEnum.password_confirmation:
      return 'تکرار کلمه عبور';
    case InputTypeEnum.mobile:
      return 'شماره موبایل';
    case InputTypeEnum.home_phone:
      return 'شماره تلفن';
    case InputTypeEnum.english_text:
      return '';
    case InputTypeEnum.persian_text:
      return '';
    case InputTypeEnum.address:
      return 'آدرس';
    case InputTypeEnum.email_getter:
      return 'آدرس ایمیل';
  }
}

type FontAwesomeIconPrefix =
  | 'fa-solid fa-lock'
  | 'fa-solid fa-envelope'
  | 'fa-solid fa-user'
  | 'fa-solid fa-input-text'
  | 'fa-solid fa-mobile'
  | 'fa-solid fa-phone'
  | 'fa-solid fa-location-dot'
  | 'fa-solid fa-at'
  | 'fa-solid fa-city'
  | 'fa-solid fa-earth-americas'
  | 'fa-solid fa-building-columns'
  | 'fa-solid fa-shop'
  | 'fa-brands fa-instagram'
  | 'fa-brands fa-twitter'
  | 'fa-brands fa-bitcoin'
  | undefined;

type FontAwesomeIconSuffix = 'fa-solid fa-eye' | 'fa-solid fa-eye-slash' | undefined;

export interface InputMetrics {
  prefixIcon: FontAwesomeIconPrefix;
  suffixIcon: FontAwesomeIconSuffix;
  prefixTemplateRef?: TemplateRef<void>;
  suffixTemplateRef?: TemplateRef<void>;
  addOnAfterTempRef?: TemplateRef<void>;
  addOnBeforeTempRef?: TemplateRef<void>;
  label: string;
  placeholder: string;
}
