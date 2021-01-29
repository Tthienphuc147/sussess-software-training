import { FormGroup } from '@angular/forms';


export default class ValidationHelper {
  private static validationMessages = {
    required: 'This field is required',
    // (This field is required)
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
}