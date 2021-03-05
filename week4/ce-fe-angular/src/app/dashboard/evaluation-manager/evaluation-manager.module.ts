import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluationManagerRoutingModule } from './evaluation-manager-routing.module';
import { EvaluationMakeResultComponent } from './evaluation-make-result/evaluation-make-result.component';


@NgModule({
  declarations: [EvaluationMakeResultComponent],
  imports: [
    CommonModule,
    EvaluationManagerRoutingModule
  ]
})
export class EvaluationManagerModule { }
