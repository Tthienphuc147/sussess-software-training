import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxNotificationDirection, NgxNotificationMsgService, NgxNotificationStatusMsg } from 'ngx-notification-msg';
import { forkJoin, Observable } from 'rxjs';
import { ERole } from 'src/app/shared/enums/role.enum';
import CustomValidator from 'src/app/shared/helpers/custom-validator.helper';
import ValidationHelper from 'src/app/shared/helpers/validation.helper';
import { Associate } from 'src/app/shared/models/associate/associate.model';
import { AssociateService } from 'src/app/shared/services/associate.service';
import { MasterDataService } from 'src/app/shared/services/master-data.service';

@Component({
  selector: 'app-associate-form',
  templateUrl: './associate-form.component.html',
  styleUrls: ['./associate-form.component.scss']
})
export class AssociateFormComponent implements OnInit {
  @Input() id;
  associate = new Associate();
  associateForm: FormGroup;
  isSubmitted = false;
  invalidMessages = [];
  eRole = ERole;
  formErrors = {
    fullName: '',
    role_id: '',
    email: '',
    position_id: '',
    manager_id: '',
    positionGroup: '',
    password: '',
  };
  rolesData = [
    { id: 2, name: 'Member' },
    { id: 3, name: 'Manager' }
  ];
  groupsData = [];
  positionsData = [];
  positionDataFilter = [];
  managerData = [];

  constructor(
    private associateService: AssociateService,
    private masterDataService: MasterDataService,
    private ngxNotificationMsgService: NgxNotificationMsgService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    let sources: Observable<any>[] = [];
    sources.push(this.masterDataService.getAllPosition());
    sources.push(this.masterDataService.getAllPositionGroup());
    if (this.associateForm.getRawValue().role_id === this.eRole.MEMBER_ROLE) {
      sources.push(this.associateService.getAllAssociate())
    }
    if (this.id) {
      sources.push(this.associateService.getDetailAssociate(this.id));
    }
    forkJoin(sources).subscribe(([res1, res2, res3, res4]) => {
      this.groupsData = res1;
      this.positionsData = res2;
      this.managerData = res3;
      this.associate = res4;
      this.createForm();
    })
  }

  createForm(): void {
    this.associateForm = this.fb.group({
      fullName: [this.associate.fullName, [CustomValidator.required]],
      email: [this.associate.email, [CustomValidator.required, CustomValidator.email]],
      position_id: [this.associate.position_id, [CustomValidator.required]],
      positionGroup: [this.associate.positionGroup.id, [CustomValidator.required]],
      role_id: [this.associate.role_id, [CustomValidator.required]],
      manager_id: [this.associate.manager_id],
      birthday: [this.associate.birthday ? new Date(this.associate.birthday): null],
      password: ['', [CustomValidator.required]]
    })
    this.associateForm.valueChanges.subscribe(_ => {
      this.onFormValueChanged();
    })
  }

  onFormValueChanged(): void {
    if (this.associateForm.getRawValue().role_id === this.eRole.MEMBER_ROLE) {
      this.associateForm.get('manager_id').setValidators([CustomValidator.required])
    }else {
      this.associateForm.get('manager_id').clearValidators()
    }
    if (this.isSubmitted) {
      this.validateForm();
    }
  }

  changePositionGroup(event): void {
    this.positionDataFilter = [...this.positionsData].filter(item => item.position_group_id === event);
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
      if (this.associateForm.getRawValue().role_id === this.eRole.MANAGER_ROLE) {
        requestModel.append("manager_id", this.associateForm.getRawValue().manager_id)
      }
      requestModel.append("fullName", this.associateForm.getRawValue().fullName);
      requestModel.append("email", this.associateForm.getRawValue().email);
      requestModel.append("position_id", this.associateForm.getRawValue().position_id);
      requestModel.append("role_id", this.associateForm.getRawValue().role_id);
      requestModel.append("birthday", this.associateForm.getRawValue().birthday);
      requestModel.append("password", this.associateForm.getRawValue().password);
      this.associateService.saveAssociate(requestModel, this.id).subscribe(res => {
        this.ngxNotificationMsgService.open({
          status: NgxNotificationStatusMsg.SUCCESS,
          direction: NgxNotificationDirection.TOP_RIGHT,
          header: 'Notification',
          messages: [this.id ? 'Update Associate Successful' : 'Create Associate Successful']
       });
      })
    }
  }




}
