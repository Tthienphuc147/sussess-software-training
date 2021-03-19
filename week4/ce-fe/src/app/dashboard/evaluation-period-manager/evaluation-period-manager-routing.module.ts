import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluationPeriodCreateComponent } from './evaluation-period-create/evaluation-period-create.component';
import { EvaluationPeriodEditComponent } from './evaluation-period-edit/evaluation-period-edit.component';
import { EvaluationPeriodListComponent } from './evaluation-period-list/evaluation-period-list.component';
import { EvaluationPeriodManagerComponent } from './evaluation-period-manager.component';

const routes: Routes = [
  {
    path: '',
    component: EvaluationPeriodManagerComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: EvaluationPeriodListComponent
      },
      {
        path: 'create',
        component: EvaluationPeriodCreateComponent,
      },
      {
        path: 'edit/:id',
        component: EvaluationPeriodEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluationPeriodManagerRoutingModule { }
