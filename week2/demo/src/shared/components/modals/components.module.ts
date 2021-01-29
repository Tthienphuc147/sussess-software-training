
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgZorroAntdModule, NzFormModule } from "ng-zorro-antd";
import { ReceiptModalComponent } from "./receipt-modal/receipt-modal.component";


@NgModule({
  declarations: [
    ReceiptModalComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReceiptModalComponent
  ],
  entryComponents: [
    ReceiptModalComponent
  ],
})
export class ComponentsModule {}