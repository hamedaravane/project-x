import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const passwordControl = control.get('password');
  const confirmPasswordControl = control.get('confirmPassword');

  passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value ? confirmPasswordControl?.setErrors({confirm: true}) : {};

  return passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value ? {confirm: true} : null;
}

export function strongPasswordValidator(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value || '';

  const upperCaseCharacters = /[A-Z]+/g;
  const lowerCaseCharacters = /[a-z]+/g;
  const numberCharacters = /[0-9]+/g;
  const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if (value.length < 8) {
    return { passwordTooShort: true };
  }

  if (!upperCaseCharacters.test(value)) {
    return { missingUpperCase: true };
  }

  if (!lowerCaseCharacters.test(value)) {
    return { missingLowerCase: true };
  }

  if (!numberCharacters.test(value)) {
    return { missingNumber: true };
  }

  if (!specialCharacters.test(value)) {
    return { missingSpecialCharacter: true };
  }

  return null;
}
