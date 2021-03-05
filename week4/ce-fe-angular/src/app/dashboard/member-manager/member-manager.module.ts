import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberManagerRoutingModule } from './member-manager-routing.module';
import { MemberCreateComponent } from './member-create/member-create.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberListComponent } from './member-list/member-list.component';


@NgModule({
  declarations: [MemberCreateComponent, MemberEditComponent, MemberFormComponent, MemberListComponent],
  imports: [
    CommonModule,
    MemberManagerRoutingModule
  ]
})
export class MemberManagerModule { }
