import {TemplateRef} from '@angular/core';

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
  prefixTemplateRef?: TemplateRef<void> | string;
  suffixTemplateRef?: TemplateRef<void> | string;
  addOnAfterTempRef?: TemplateRef<void> | string;
  addOnBeforeTempRef?: TemplateRef<void> | string;
  label: string;
  placeholder: string;
  possibleErrors?: {[key: string]: string}[];
}

export function generateInputBasedOnType(
  inputType: InputTypeEnum,
  prefixTemplateRef?: TemplateRef<void> | string,
  suffixTemplateRef?: TemplateRef<void> | string,
  addOnAfterTempRef?: TemplateRef<void> | string,
  addOnBeforeTempRef?: TemplateRef<void> | string,
): InputMetrics {
  switch (inputType) {
    case InputTypeEnum.email_validator:
      return {
        prefixTemplateRef,
        prefixIcon: 'fa-solid fa-envelope',
        suffixIcon: undefined,
        label: 'آدرس ایمیل',
        placeholder: 'sample@email.com',
        possibleErrors: [
          {required: 'وارد کردن آدرس ایمیل الزامی است'},
          {email: 'آدرس ایمیل صحیح نیست'}
        ]
      };
    case InputTypeEnum.password_getter:
      return {
        prefixTemplateRef,
        suffixTemplateRef,
        prefixIcon: 'fa-solid fa-lock',
        suffixIcon: 'fa-solid fa-eye',
        label: 'کلمه عبور',
        placeholder: 'sample@email.com',
      };
    case InputTypeEnum.password_validator:
      return {
        prefixTemplateRef,
        suffixTemplateRef,
        prefixIcon: 'fa-solid fa-lock',
        suffixIcon: 'fa-solid fa-eye',
        label: 'انتخاب کلمه عبور',
        placeholder: 'sample@email.com',
      };
    case InputTypeEnum.password_confirmation:
      return {
        prefixTemplateRef,
        suffixTemplateRef,
        prefixIcon: 'fa-solid fa-lock',
        suffixIcon: 'fa-solid fa-eye',
        label: 'تکرار کلمه عبور',
        placeholder: 'sample@email.com',
      };
    case InputTypeEnum.mobile:
      return {
        prefixTemplateRef,
        prefixIcon: 'fa-solid fa-envelope',
        suffixIcon: undefined,
        label: 'شماره تلفن همراه',
        placeholder: 'sample@email.com',
      };
    case InputTypeEnum.home_phone:
      return {
        prefixTemplateRef,
        prefixIcon: 'fa-solid fa-envelope',
        suffixIcon: undefined,
        label: 'شماره تلفن',
        placeholder: 'sample@email.com',
      };
    case InputTypeEnum.english_text:
      return {
        prefixTemplateRef,
        prefixIcon: 'fa-solid fa-envelope',
        suffixIcon: undefined,
        label: 'آدرس ایمیل',
        placeholder: 'sample@email.com',
      };
    case InputTypeEnum.persian_text:
      return {
        prefixTemplateRef,
        prefixIcon: 'fa-solid fa-envelope',
        suffixIcon: undefined,
        label: 'آدرس ایمیل',
        placeholder: 'sample@email.com',
      };
    case InputTypeEnum.address:
      return {
        prefixTemplateRef,
        prefixIcon: 'fa-solid fa-envelope',
        suffixIcon: undefined,
        label: 'آدرس',
        placeholder: 'sample@email.com',
      };
    case InputTypeEnum.email_getter:
      return {
        prefixTemplateRef,
        prefixIcon: 'fa-solid fa-envelope',
        suffixIcon: undefined,
        label: 'آدرس ایمیل',
        placeholder: 'sample@email.com',
        possibleErrors: [
          {required: 'وارد کردن آدرس ایمیل الزامی است'},
          {email: 'آدرس ایمیل صحیح نیست'}
        ]
      };
  }
}
