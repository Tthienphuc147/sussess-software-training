import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberManagerRoutingModule } from './member-manager-routing.module';
import { MemberListComponent } from './member-list/member-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MemberViewComponent } from './member-view/member-view.component';
import { MemberManagerComponent } from './member-manager.component';


@NgModule({
  declarations: [MemberManagerComponent,MemberListComponent, MemberViewComponent],
  imports: [
    CommonModule,
    MemberManagerRoutingModule,
    SharedModule
  ]
})
export class MemberManagerModule { }
