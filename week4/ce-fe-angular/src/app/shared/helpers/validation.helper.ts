import { FormGroup } from '@angular/forms';


export default class ValidationHelper {
  private static validationMessages = {
    required: 'This field is required',
    email: 'Invalid email address',
    password: 'Password must contain at least 8 characters with at least one Capital letter, at least one lower case letter and at least one number'
  };

  static getInvalidMessages(
    form: FormGroup,
    formErrors: object): string[] {
    if (!form) { return; }
    const errorMessages = [];
    for (const field in formErrors) {
      formErrors[field] = '';
      const control = form.get(field);
      if (control && !control.valid) {
        // const messages = validationMessages[field];
        // tslint:disable-next-line:forin
        for (const key in control.errors) {
          formErrors[field] += this.validationMessages[key] + '';
          break;
        }
      }
    }

    for (const key in formErrors) {
      if (formErrors.hasOwnProperty(key) && formErrors[key].length > 0) {
        errorMessages.push(formErrors[key]);
      }
    }

    return errorMessages;
  }

  static validateForm(
    form: FormGroup,
    formErrors: object): boolean {
    return true;
  }

  static isValidateForm(
    form: FormGroup
  ): boolean {
    if (!form) { return; }
    let isError = false;
    for (const field in form.controls) {
      const control = form.get(field);
      if (control['controls'] && Array.isArray(control['controls'])) {
        control['controls'].forEach(item => {
          if (this.isValidateForm(item)) {
            isError = true;
          }
        });
      }
      if ((!(control['controls'] && Array.isArray(control['controls']))) && control && !control.disabled && !control.valid) {
        isError = true;
        // tslint:disable-next-line:forin
        control['CustomErr'] = control.errors && ValidationHelper.validationMessages[Object.keys(control.errors)[0]];
      } else {
        control['CustomErr'] = '';
      }
    }
    return isError;
  }
}
