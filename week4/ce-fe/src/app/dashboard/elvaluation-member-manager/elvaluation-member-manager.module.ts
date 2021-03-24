import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElvaluationMemberManagerRoutingModule } from './elvaluation-member-manager-routing.module';
import { EvaluationMemberEditComponent } from './evaluation-member-edit/evaluation-member-edit.component';
import { EvaluationMemberCreateComponent } from './evaluation-member-create/evaluation-member-create.component';
import { EvaluationMemberFormComponent } from './evaluation-member-form/evaluation-member-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EvaluationMemberListComponent } from './evaluation-member-list/evaluation-member-list.component';
import { ElvaluationMemberManagerComponent } from './elvaluation-member-manager.component';


@NgModule({
  declarations: [ElvaluationMemberManagerComponent,EvaluationMemberListComponent,EvaluationMemberEditComponent, EvaluationMemberCreateComponent, EvaluationMemberFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    ElvaluationMemberManagerRoutingModule
  ],
  exports: [
    EvaluationMemberFormComponent
  ]
})
export class ElvaluationMemberManagerModule { }
