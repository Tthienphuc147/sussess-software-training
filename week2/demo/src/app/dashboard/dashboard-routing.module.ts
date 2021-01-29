import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'receipt',
        pathMatch: 'full'
      },
      {
        path: 'receipt',
        loadChildren: ()=> import('./receipt/receipt.module').then(mod => mod.ReceiptModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
