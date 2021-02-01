import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageRoutingModule } from '../main-page-routing.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule,
    MainPageRoutingModule
  ],
  exports: [
    HeaderComponent, FooterComponent
  ]
})
export class LayoutModule { }
