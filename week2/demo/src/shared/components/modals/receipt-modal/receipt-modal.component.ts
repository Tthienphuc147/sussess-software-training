import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';
import { ENTypeForm } from 'src/shared/constants/type-form.enum';
import CustomValidator from 'src/shared/helpers/custom-validator.helper';
import ValidationHelper from 'src/shared/helpers/validation.helper';
import { Receipt } from 'src/shared/models/receipt.model';
import { NotificationService } from 'src/shared/services/notification.service';
import { ReceiptService } from 'src/shared/services/receipt.service';

@Component({
  selector: 'app-receipt-modal',
  templateUrl: './receipt-modal.component.html',
  styleUrls: ['./receipt-modal.component.scss']
})
export class ReceiptModalComponent implements OnInit {
  @Input() typeForm: string;
  @Input() receipt : Receipt;
  typeFormEnum = ENTypeForm;
  formReceipt: FormGroup;
  isSubmitted = false;
  invalidMessages: string[];
  formErrors = {
    name: '',
    description: '',
    image: ''
  };
  constructor(
    private fb: FormBuilder,
    private modal: NzModalRef,
    private receiptService: ReceiptService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formReceipt = this.fb.group(
      {
        name: [this.receipt.name, [CustomValidator.required]],
        description: [this.receipt.description, [CustomValidator.required]],
        image: [this.receipt.image, [CustomValidator.required]]
      },
    );
    this.formReceipt.valueChanges.subscribe(data => {
      this.onFormValueChanged();
    });
  }

  validateForm() {
    this.invalidMessages = ValidationHelper.getInvalidMessages(
      this.formReceipt,
      this.formErrors
    );
    return this.invalidMessages.length === 0;
  }

  onFormValueChanged() {
    if (this.isSubmitted) {
      this.validateForm();
    }
  }

  closePopup(): void {
    this.modal.destroy({});
  }

  submit() {
    this.isSubmitted = true;
    if (this.validateForm()) {
      const requestModel = {
        id: this.receipt.id,
        name: this.formReceipt.getRawValue().name,
        description: this.formReceipt.getRawValue().description,
        image: this.formReceipt.getRawValue().image,
        ingredients: null
      }
      switch (this.typeForm) {
        case this.typeFormEnum.EDIT:
          const currentIndexReceipt = this.receiptService.receiptData.findIndex(item => item.id === this.receipt.id);
          this.receiptService.receiptData[currentIndexReceipt] = requestModel;
          this.notificationService.showSuccess('Edit current receipt success!','Notification');
          break;
        default:
          this.receiptService.receiptData.unshift(requestModel);
          this.notificationService.showSuccess('Create new receipt success!','Notification');
          break;
      }
      this.modal.destroy({
        success: true
      });
    }
  }
}
