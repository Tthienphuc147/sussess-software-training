import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageNotPermissionComponent } from './page-not-permission/page-not-permission.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PageNotFoundComponent,PageNotPermissionComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ExceptionModule { }
