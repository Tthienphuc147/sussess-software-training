import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElvaluationMemberManagerRoutingModule } from './elvaluation-member-manager-routing.module';
import { EvaluationMemberEditComponent } from './evaluation-member-edit/evaluation-member-edit.component';
import { EvaluationMemberCreateComponent } from './evaluation-member-create/evaluation-member-create.component';
import { EvaluationMemberFormComponent } from './evaluation-member-form/evaluation-member-form.component';


@NgModule({
  declarations: [EvaluationMemberEditComponent, EvaluationMemberCreateComponent, EvaluationMemberFormComponent],
  imports: [
    CommonModule,
    ElvaluationMemberManagerRoutingModule
  ]
})
export class ElvaluationMemberManagerModule { }
