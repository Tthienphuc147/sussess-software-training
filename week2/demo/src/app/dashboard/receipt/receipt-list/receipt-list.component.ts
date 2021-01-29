import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { ReceiptModalComponent } from 'src/shared/components/modals/receipt-modal/receipt-modal.component';
import { ENTypeForm } from 'src/shared/constants/type-form.enum';
import { Receipt } from 'src/shared/models/receipt.model';
import { ReceiptService } from 'src/shared/services/receipt.service';

@Component({
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html',
  styleUrls: ['./receipt-list.component.scss']
})
export class ReceiptListComponent implements OnInit {
  typeFormEnum = ENTypeForm;
  data: Receipt[] = [];
  currentReceipt: Receipt;
  page: number = 1;
  constructor(
    private receiptService: ReceiptService,
    private modalService: NzModalService) { }

  ngOnInit(): void {
    this.data = [...this.receiptService.receiptData];
    this.currentReceipt = this.data[0];
  }

  chooseReceipt(id: number): void {
    this.currentReceipt = this.data.find(item => item.id === id);
  }

  openReceiptModal(type: ENTypeForm, receiptData?: Receipt): void {
    const modal = this.modalService.create({
      nzContent: ReceiptModalComponent,
      nzComponentParams: {
        typeForm: type,
        receipt: receiptData ? receiptData : new Receipt()
      }
    });
    modal.afterClose.subscribe((result) => {
      if (result && result.success) {
        this.data = [...this.receiptService.receiptData]
        this.currentReceipt = [...this.receiptService.receiptData].find(item => item.id === this.currentReceipt.id);
      }
    });
  }
}
