import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluationManagerRoutingModule } from './evaluation-manager-routing.module';
import { EvaluationMakeResultComponent } from './evaluation-make-result/evaluation-make-result.component';
import { EvaluationListComponent } from './evaluation-list/evaluation-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EvaluationMemberFormComponent } from '../elvaluation-member-manager/evaluation-member-form/evaluation-member-form.component';


@NgModule({
  declarations: [EvaluationMakeResultComponent, EvaluationListComponent, EvaluationMemberFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    EvaluationManagerRoutingModule
  ]
})
export class EvaluationManagerModule { }
