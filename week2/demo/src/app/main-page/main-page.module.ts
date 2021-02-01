import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { SharedModule } from 'src/shared/shared.module';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
