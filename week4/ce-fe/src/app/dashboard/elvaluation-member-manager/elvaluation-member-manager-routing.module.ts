import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElvaluationMemberManagerComponent } from './elvaluation-member-manager.component';
import { EvaluationMemberCreateComponent } from './evaluation-member-create/evaluation-member-create.component';
import { EvaluationMemberEditComponent } from './evaluation-member-edit/evaluation-member-edit.component';
import { EvaluationMemberListComponent } from './evaluation-member-list/evaluation-member-list.component';

const routes: Routes = [
  {
    path:'',
    component:ElvaluationMemberManagerComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: EvaluationMemberListComponent
      },
      {
        path:'create',
        component: EvaluationMemberCreateComponent
      },
      {
        path:'edit/:id',
        component:EvaluationMemberEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElvaluationMemberManagerRoutingModule { }
