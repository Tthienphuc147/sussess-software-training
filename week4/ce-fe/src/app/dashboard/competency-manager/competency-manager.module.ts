import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetencyManagerRoutingModule } from './competency-manager-routing.module';
import { CompetencyManagerComponent } from './competency-manager.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompetencyCreateComponent } from './competency-create/competency-create.component';
import { CompetencyEditComponent } from './competency-edit/competency-edit.component';
import { CompetencyFormComponent } from './competency-form/competency-form.component';
import { CompetencyListComponent } from './competency-list/competency-list.component';


@NgModule({
  declarations: [CompetencyManagerComponent,CompetencyCreateComponent,CompetencyEditComponent,CompetencyFormComponent,CompetencyListComponent],
  imports: [
    CommonModule,
    CompetencyManagerRoutingModule,
    SharedModule
  ]
})
export class CompetencyManagerModule { }
