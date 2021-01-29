import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NzCheckboxModule, NzDatePickerModule } from 'ng-zorro-antd';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzListModule } from 'ng-zorro-antd/list';
import { NgxPaginationModule } from 'ngx-pagination';
import { ComponentsModule } from './components/modals/components.module';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NgZorroAntdModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzListModule,
    NgxPaginationModule,
    ComponentsModule,
    ToastrModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NgZorroAntdModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzListModule,
    NgxPaginationModule,
    ComponentsModule
  ]
})
export class SharedModule { }
