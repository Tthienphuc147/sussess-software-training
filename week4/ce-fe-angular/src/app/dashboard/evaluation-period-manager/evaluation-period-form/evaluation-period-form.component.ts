import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import CustomValidator from 'src/app/shared/helpers/custom-validator.helper';
import ValidationHelper from 'src/app/shared/helpers/validation.helper';
import { AssociateService } from 'src/app/shared/services/associate.service';
import { EvaluationPeriodService } from 'src/app/shared/services/evaluation-period.service';

@Component({
  selector: 'app-evaluation-period-form',
  templateUrl: './evaluation-period-form.component.html',
  styleUrls: ['./evaluation-period-form.component.scss']
})
export class EvaluationPeriodFormComponent implements OnInit {
  @Input() id;
  evaluationPeriod: any;
  evaluationPeriodForm: FormGroup;
  isSubmitted = false;
  invalidMessages = [];
  formErrors = {
    name: '',
    start_time: '',
    end_time: '',
    description: '',
  };

  constructor(
    private evaluationPeriodService: EvaluationPeriodService,

    private notificationService: NotificationsService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.id) {
      this.evaluationPeriodService.getDetailEvaluationPeriod(this.id).subscribe(res => {
        this.evaluationPeriod = res;
        this.createForm();
      });
      return;
    }
    this.createForm();
  }

  createForm(): void {
    this.evaluationPeriodForm = this.fb.group({
      name: [this.evaluationPeriod.fullName, [CustomValidator.required]],
      start_time: [this.evaluationPeriod.email, [CustomValidator.required]],
      end_time: [this.evaluationPeriod.position, [CustomValidator.required]],
      description: [this.evaluationPeriod.positionGroup, [CustomValidator.required]],
    })
    this.evaluationPeriodForm.valueChanges.subscribe(_ => {
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
      this.evaluationPeriodForm,
      this.formErrors
    );
    return this.invalidMessages.length === 0;
  }

  submitForm(): void {
    this.isSubmitted = true;
    if (this.validateForm()) {
      const requestModel = new FormData();
      if (this.id) {
        requestModel.append("id", this.id);
      }
      requestModel.append("name", this.evaluationPeriodForm.getRawValue().name);
      requestModel.append("start_time", this.evaluationPeriodForm.getRawValue().start_time);
      requestModel.append("end_time", this.evaluationPeriodForm.getRawValue().end_time);
      requestModel.append("description", this.evaluationPeriodForm.getRawValue().description);
      this.evaluationPeriodService.saveEvaluationPeriod(requestModel, this.id).subscribe(res => {
        this.notificationService.success('Notification', this.id ? 'Update Evaluation Period Information Successful' : 'Create Evaluation Period Successful')
      })
    }
  }

}
