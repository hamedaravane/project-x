import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const passwordControl = control.get('password');
  const confirmPasswordControl = control.get('confirmPassword');

  passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value
    ? confirmPasswordControl?.setErrors({confirm: true})
    : {};

  return passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value
    ? {confirm: true}
    : null;
};

/**
 * Validates that the provided control value meets certain password strength requirements.
 *
 * This validator checks the following conditions:
 * 1. The password length must be at least 8 characters.
 * 2. The password must contain at least one uppercase character.
 * 3. The password must contain at least one lowercase character.
 * 4. The password must contain at least one numeric character.
 * 5. The password must contain at least one special character.
 *
 * If a condition is not met, the validator will return an error object with a key
 * representing the failed condition. If all conditions are met, it returns `null`.
 *
 * @param {AbstractControl} control - The form control that contains the password string.
 *
 * @returns {ValidationErrors | null} - An errors object if validation fails, or `null` if validation succeeds.
 */
export function strongPasswordValidator(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value || '';
  const errors: ValidationErrors = {};

  if (!value) {
    return null;
  }

  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);

  if (value.length < 8) errors['passwordTooShort'] = true;
  if (!hasUpperCase) errors['missingUpperCase'] = true;
  if (!hasLowerCase) errors['missingLowerCase'] = true;
  if (!hasNumber) errors['missingNumber'] = true;
  if (!hasSpecialCharacter) errors['missingSpecialCharacter'] = true;

  return Object.keys(errors).length ? errors : null;
}

export function persianCharValidator(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value || '';

  if (!value) return null;

  const pattern = /^[\u0600-\u06FF\s]+$/;
  return !pattern.test(value) ? {notPersianCharacters: true} : null;
}
