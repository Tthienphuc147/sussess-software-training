import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociateManagerRoutingModule } from './associate-manager-routing.module';
import { AssociateCreateComponent } from './associate-create/associate-create.component';
import { AssociateEditComponent } from './associate-edit/associate-edit.component';
import { AssociateListComponent } from './associate-list/associate-list.component';
import { AssociateFormComponent } from './associate-form/associate-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AssociateCreateComponent, AssociateEditComponent, AssociateListComponent, AssociateFormComponent],
  imports: [
    CommonModule,
    AssociateManagerRoutingModule,
    SharedModule
  ]
})
export class AssociateManagerModule { }
