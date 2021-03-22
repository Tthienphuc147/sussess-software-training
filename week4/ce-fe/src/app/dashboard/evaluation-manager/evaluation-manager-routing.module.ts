import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluationListComponent } from './evaluation-list/evaluation-list.component';
import { EvaluationMakeResultComponent } from './evaluation-make-result/evaluation-make-result.component';
import { EvaluationManagerComponent } from './evaluation-manager.component';

const routes: Routes = [
  {
    path: '',
    component:EvaluationManagerComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: EvaluationListComponent
      },
      {
        path: 'make-result/:id',
        component: EvaluationMakeResultComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluationManagerRoutingModule { }
