import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from './components/component.module';
import { ApplicationService } from './services/aplication.service';
import { AuthenticationService } from './services/authenication.service';
import { SpinnerService } from './services/spinner.service';
import { NgxNotificationMsgModule } from 'ngx-notification-msg';
import { LoginGuard } from './guards/login.guard';
import { AntdModule } from './antd.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule,
    NgxNotificationMsgModule,
    AntdModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule,
    NgxNotificationMsgModule,
    AntdModule,
  ],
  providers: [
    ApplicationService,
    AuthenticationService,
    SpinnerService,
    LoginGuard
  ]
})
export class SharedModule { }
