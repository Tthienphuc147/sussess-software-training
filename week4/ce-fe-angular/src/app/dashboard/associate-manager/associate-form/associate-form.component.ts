import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { forkJoin, Observable } from 'rxjs';
import CustomValidator from 'src/app/shared/helpers/custom-validator.helper';
import ValidationHelper from 'src/app/shared/helpers/validation.helper';
import { AssociateService } from 'src/app/shared/services/associate.service';
import { MasterDataService } from 'src/app/shared/services/master-data.service';

@Component({
  selector: 'app-associate-form',
  templateUrl: './associate-form.component.html',
  styleUrls: ['./associate-form.component.scss']
})
export class AssociateFormComponent implements OnInit {
  @Input() id;
  associate: any;
  associateForm: FormGroup;
  isSubmitted = false;
  invalidMessages = [];
  formErrors = {
    fullName: '',
    role: '',
    email: '',
    position: '',
    positionGroup: ''
  };
  rolesData = [
    { id: 2, name: 'Member' },
    { id: 3, name: 'Manager' }
  ];
  groupsData = [];
  positionsData = [];

  constructor(
    private associateService: AssociateService,
    private masterDataService: MasterDataService,
    private notificationService: NotificationsService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    let sources: Observable<any>[] = [];
    sources.push(this.masterDataService.getAllPosition());
    sources.push(this.masterDataService.getAllPositionGroup());
    if (this.id) {
      sources.push(this.associateService.getDetailAssociate(this.id));
    }
    forkJoin(sources).subscribe(([res1, res2, res3]) => {
      this.groupsData = res1;
      this.positionsData = res2;
      this.associate = res3;
      this.createForm();
    })
  }

  createForm(): void {
    this.associateForm = this.fb.group({
      fullName: [this.associate.fullName, [CustomValidator.required]],
      email: [this.associate.email, [CustomValidator.required, CustomValidator.email]],
      position: [this.associate.position, [CustomValidator.required]],
      positionGroup: [this.associate.positionGroup, [CustomValidator.required]],
      role: [this.associate.role, [CustomValidator.required]],
      birthday: [this.associate.birthday],
      password: ['', [CustomValidator.required]]
    })
    this.associateForm.valueChanges.subscribe(_ => {
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
      this.associateForm,
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
      requestModel.append("fullName", this.associateForm.getRawValue().fullName);
      requestModel.append("email", this.associateForm.getRawValue().email);
      requestModel.append("position_id", this.associateForm.getRawValue().position);
      requestModel.append("role_id", this.associateForm.getRawValue().role);
      requestModel.append("birthday", this.associateForm.getRawValue().birthday);
      requestModel.append("password", this.associateForm.getRawValue().password);
      this.associateService.saveAssociate(requestModel, this.id).subscribe(res => {
        this.notificationService.success('Notification', this.id ? 'Update Associate Information Successful' : 'Create Associate Successful')
      })
    }
  }




}
