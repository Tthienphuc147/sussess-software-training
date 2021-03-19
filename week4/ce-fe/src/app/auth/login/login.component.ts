import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxNotificationDirection, NgxNotificationMsgService, NgxNotificationStatusMsg } from 'ngx-notification-msg';
import CustomValidator from 'src/app/shared/helpers/custom-validator.helper';
import ValidationHelper from 'src/app/shared/helpers/validation.helper';
import { AuthenticationModel } from 'src/app/shared/models/auth/authentication.model';
import { AuthenticationService } from 'src/app/shared/services/authenication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  isSubmitted = false;
  invalidMessages = [];
  formErrors = {
    email: '',
    password: ''
  };
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private  ngxNotificationMsgService: NgxNotificationMsgService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.signInForm = this.fb.group({
      email: ['', [CustomValidator.required, CustomValidator.email]],
      password: ['', [CustomValidator.required, CustomValidator.password]]
    })
    this.signInForm.valueChanges.subscribe(_ => {
      this.onFormValueChanged();
    })
  }

  onFormValueChanged(): void {
    if (this.isSubmitted) {
      this.validateForm();
    }
  }

  validateForm(): boolean {
    this.invalidMessages = ValidationHelper.getInvalidMessages(
      this.signInForm,
      this.formErrors
    );
    return this.invalidMessages.length === 0;
  }

  submitForm(): void {
    this.isSubmitted = true;
    if (this.validateForm()) {
      this.authService.login(this.signInForm.getRawValue().email, this.signInForm.getRawValue().password).subscribe(res => {
        this.authService.setAuthenticationModel(
          res.data
        );
        this.router.navigate(['/dashboard']);
        this.ngxNotificationMsgService.open({
          status: NgxNotificationStatusMsg.SUCCESS,
          direction: NgxNotificationDirection.TOP_RIGHT,
          header: 'Notification',
          messages: ['Login successful.']
       });
      });
    }
  }

}
