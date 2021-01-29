import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiptRoutingModule } from './receipt-routing.module';
import { ReceiptListComponent } from './receipt-list/receipt-list.component';
import { ReceiptComponent } from './receipt.component';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [ReceiptListComponent,ReceiptComponent],
  imports: [
    CommonModule,
    ReceiptRoutingModule,
    SharedModule
  ]
})
export class ReceiptModule { }
