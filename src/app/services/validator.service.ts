import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  constructor() {}

  passwordValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordcontrol || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        confirmPasswordControl.errors.passwordMismatch
      ) {
        return null;
      }

      if (passwordcontrol.value != confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMisMatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }

      return null;
    };
  }
}
