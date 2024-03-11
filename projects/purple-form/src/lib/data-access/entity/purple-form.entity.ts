import {TemplateRef} from '@angular/core';
import {keyframes} from '@angular/animations';

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
  | 'english-text'
  | 'instagram'
  | 'twitter';

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
  instagram,
  twitter,
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
    case 'instagram':
      return InputTypeEnum.instagram;
    case 'twitter':
      return InputTypeEnum.twitter;
    case 'email-getter':
      return InputTypeEnum.email_getter;
  }
}

type FontAwesomeIcon =
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
  | 'fa-solid fa-eye'
  | 'fa-solid fa-eye-slash'
  | undefined;

interface PossibleError {
  [key: string]: string;
}

export interface InputMetrics {
  prefixIcon?: FontAwesomeIcon;
  suffixIcon?: FontAwesomeIcon;
  prefixTemplateRef?: TemplateRef<void> | string;
  suffixTemplateRef?: TemplateRef<void> | string;
  addOnAfterTempRef?: TemplateRef<void> | string;
  addOnBeforeTempRef?: TemplateRef<void> | string;
  label: string;
  placeholder: string;
  possibleErrors?: PossibleError[];
  formDirection: 'rtl' | 'ltr';
}

export function generateInputBasedOnType(
  inputType: InputTypeEnum,
  label: string | null,
  placeholder: string | null,
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
        label: label ?? 'آدرس ایمیل',
        placeholder: placeholder ?? 'sample@email.com',
        possibleErrors: [
          {required: 'وارد کردن آدرس ایمیل الزامی است'},
          {email: 'آدرس ایمیل صحیح نیست'}
        ],
        formDirection: 'ltr',
      };
    case InputTypeEnum.password_getter:
      return {
        prefixTemplateRef,
        suffixTemplateRef,
        prefixIcon: 'fa-solid fa-lock',
        suffixIcon: 'fa-solid fa-eye',
        label: label ?? 'کلمه عبور',
        placeholder: placeholder ?? '',
        formDirection: 'ltr',
      };
    case InputTypeEnum.password_validator:
      return {
        prefixTemplateRef,
        suffixTemplateRef,
        prefixIcon: 'fa-solid fa-lock',
        suffixIcon: 'fa-solid fa-eye',
        label: label ?? 'انتخاب کلمه عبور',
        placeholder: placeholder ?? '',
        possibleErrors: [{confirm: 'کلمه عبور یکسان نیست'}, {required: 'وارد کردن تکرار کلمه عبور الزامی است'}],
        formDirection: 'ltr',
      };
    case InputTypeEnum.password_confirmation:
      return {
        prefixTemplateRef,
        suffixTemplateRef,
        prefixIcon: 'fa-solid fa-lock',
        suffixIcon: 'fa-solid fa-eye',
        label: label ?? 'تکرار کلمه عبور',
        placeholder: placeholder ?? '',
        possibleErrors: [{confirm: 'کلمه عبور یکسان نیست'}, {required: 'وارد کردن تکرار کلمه عبور الزامی است'}],
        formDirection: 'ltr',
      };
    case InputTypeEnum.mobile:
      return {
        suffixTemplateRef,
        suffixIcon: 'fa-solid fa-mobile',
        label: label ??'شماره تلفن همراه',
        placeholder: placeholder ?? 'بدون صفر و کد کشور',
        addOnBeforeTempRef,
        possibleErrors: [{required: 'وارد کردن شماره همراه الزامی است'}, {pattern: 'شماره تلفن وارد شده درست نیست'}],
        formDirection: 'ltr',
      };
    case InputTypeEnum.home_phone:
      return {
        suffixTemplateRef,
        suffixIcon: 'fa-solid fa-phone',
        label: label ?? 'شماره تلفن',
        placeholder: placeholder ?? 'بدون صفر و کد کشور',
        addOnBeforeTempRef,
        possibleErrors: [{required: 'وارد کردن شماره تلفن الزامی است'}, {pattern: 'شماره تلفن وارد شده درست نیست'}],
        formDirection: 'ltr',
      };
    case InputTypeEnum.english_text:
      return {
        prefixTemplateRef,
        prefixIcon: 'fa-solid fa-input-text',
        label: label ?? '',
        placeholder: placeholder ?? 'only in english',
        possibleErrors: [{required: 'پر کردن این فیلد الزامی است'}, {pattern: 'فقط از حروف انگلیسی استفاده کنید'}],
        formDirection: 'ltr',
      };
    case InputTypeEnum.persian_text:
      return {
        prefixTemplateRef,
        prefixIcon: 'fa-solid fa-input-text',
        label: label ?? '',
        placeholder: placeholder ?? 'از حروف فارسی استفاده شود',
        possibleErrors: [
          {required: 'پر کردن این فیلد الزامی است'},
          {notPersianCharacters: 'فقط از حروف فارسی استفاده کنید'},
        ],
        formDirection: 'rtl',
      };
    case InputTypeEnum.address:
      return {
        prefixTemplateRef,
        prefixIcon: 'fa-solid fa-location-dot',
        label: label ?? 'آدرس',
        placeholder: placeholder ?? 'تهران، بلوار شریعتی، خیابان مدرس، پلاک ۱',
        possibleErrors: [
          {required: 'پر کردن این فیلد الزامی است'},
          {notPersianCharacters: 'فقط از حروف فارسی استفاده کنید'},
        ],
        formDirection: 'rtl',
      };
    case InputTypeEnum.email_getter:
      return {
        prefixTemplateRef,
        prefixIcon: 'fa-solid fa-envelope',
        label: label ?? 'آدرس ایمیل',
        placeholder: placeholder ?? 'sample@email.com',
        possibleErrors: [{required: 'وارد کردن آدرس ایمیل الزامی است'}, {email: 'آدرس ایمیل صحیح نیست'}],
        formDirection: 'ltr',
      };
    case InputTypeEnum.instagram:
      return {
        prefixTemplateRef,
        prefixIcon: 'fa-brands fa-instagram',
        label: label ?? 'نام کاربری در اینستاگرام',
        placeholder: placeholder ?? 'negarhoseeini',
        possibleErrors: [{required: 'وارد کردن نام کاربری الزامی است'}, {pattern: 'نام کاربری صحیح نیست'}],
        formDirection: 'ltr',
      };
    case InputTypeEnum.twitter:
      return {
        prefixTemplateRef,
        prefixIcon: 'fa-brands fa-twitter',
        label: label ?? 'نام کاربری در X (توئیتر سابق)',
        placeholder: placeholder ?? 'mrezasoltani',
        possibleErrors: [{required: 'وارد کردن نام کاربری الزامی است'}, {pattern: 'نام کاربری صحیح نیست'}],
        formDirection: 'ltr',
      };
  }
}

export interface Countries {
  key_id: number;
  name: string;
  code: string;
  emoji: string;
  unicode: string;
  dial_code: string;
  fa_name: string;
}
