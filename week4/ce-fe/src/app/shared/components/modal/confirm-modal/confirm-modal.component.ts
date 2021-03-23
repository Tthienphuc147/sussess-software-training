import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {

  @Input() title = '';
  @Input() content = '';

  constructor(private modal: NzModalRef) {}

  cancelModal(): void {
    this.modal.destroy({ data: false });
  }

  confirmModal(): void {
    this.modal.destroy({ data: true });
  }

}
