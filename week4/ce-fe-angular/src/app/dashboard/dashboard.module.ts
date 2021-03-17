import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AccountInformationComponent } from './account-information/account-information.component';
import { AssociateManagerComponent } from './associate-manager/associate-manager.component';
import { CompetencyManagerComponent } from './competency-manager/competency-manager.component';
import { CompetencyMappingManagerComponent } from './competency-mapping-manager/competency-mapping-manager.component';
import { EvaluationManagerComponent } from './evaluation-manager/evaluation-manager.component';
import { EvaluationPeriodManagerComponent } from './evaluation-period-manager/evaluation-period-manager.component';
import { MemberManagerComponent } from './member-manager/member-manager.component';
import { ElvaluationMemberManagerComponent } from './elvaluation-member-manager/elvaluation-member-manager.component';
import { CompetencyCreateComponent } from './competency-manager/competency-create/competency-create.component';
import { CompetencyEditComponent } from './competency-manager/competency-edit/competency-edit.component';
import { CompetencyFormComponent } from './competency-manager/competency-form/competency-form.component';
import { CompetencyListComponent } from './competency-manager/competency-list/competency-list.component';
import { EvaluationMemberListComponent } from './elvaluation-member-manager/evaluation-member-list/evaluation-member-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AccountInformationComponent, AssociateManagerComponent, CompetencyManagerComponent, CompetencyMappingManagerComponent, EvaluationManagerComponent, EvaluationPeriodManagerComponent, MemberManagerComponent, ElvaluationMemberManagerComponent, CompetencyCreateComponent, CompetencyEditComponent, CompetencyFormComponent, CompetencyListComponent, EvaluationMemberListComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
