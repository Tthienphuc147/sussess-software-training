import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { AccountInformationComponent } from './account-information/account-information.component';
import { CompetencyMappingManagerComponent } from './competency-mapping-manager/competency-mapping-manager.component';


@NgModule({
  declarations: [DashboardComponent, AccountInformationComponent, CompetencyMappingManagerComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule]
})
export class DashboardModule { }
