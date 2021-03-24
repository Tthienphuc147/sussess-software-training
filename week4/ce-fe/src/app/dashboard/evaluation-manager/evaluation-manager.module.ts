import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluationManagerRoutingModule } from './evaluation-manager-routing.module';
import { EvaluationMakeResultComponent } from './evaluation-make-result/evaluation-make-result.component';
import { EvaluationListComponent } from './evaluation-list/evaluation-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ElvaluationMemberManagerModule } from '../elvaluation-member-manager/elvaluation-member-manager.module';
import { EvaluationManagerComponent } from './evaluation-manager.component';


@NgModule({
  declarations: [EvaluationManagerComponent,EvaluationMakeResultComponent, EvaluationListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ElvaluationMemberManagerModule,
    EvaluationManagerRoutingModule
  ]
})
export class EvaluationManagerModule { }
