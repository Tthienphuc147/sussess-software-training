import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiptListComponent } from './receipt-list/receipt-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'receipt-list',
    pathMatch: 'full',
  },
  {
    path: 'receipt-list',
    component: ReceiptListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiptRoutingModule { }
