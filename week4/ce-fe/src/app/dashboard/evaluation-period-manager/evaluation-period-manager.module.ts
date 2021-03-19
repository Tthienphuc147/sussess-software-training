import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluationPeriodManagerRoutingModule } from './evaluation-period-manager-routing.module';
import { EvaluationPeriodCreateComponent } from './evaluation-period-create/evaluation-period-create.component';
import { EvaluationPeriodEditComponent } from './evaluation-period-edit/evaluation-period-edit.component';
import { EvaluationPeriodFormComponent } from './evaluation-period-form/evaluation-period-form.component';
import { EvaluationPeriodListComponent } from './evaluation-period-list/evaluation-period-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [EvaluationPeriodCreateComponent, EvaluationPeriodEditComponent, EvaluationPeriodFormComponent, EvaluationPeriodListComponent],
  imports: [
    CommonModule,
    EvaluationPeriodManagerRoutingModule,
    SharedModule
  ]
})
export class EvaluationPeriodManagerModule { }
