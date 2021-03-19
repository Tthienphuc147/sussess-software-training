import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from './components/component.module';
import { ApplicationService } from './services/aplication.service';
import { AuthenticationService } from './services/authenication.service';
import { SpinnerService } from './services/spinner.service';
import { NgxNotificationMsgModule } from 'ngx-notification-msg';
import { LoginGuard } from './guards/login.guard';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from '../icons-provider.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule,
    NgxNotificationMsgModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ComponentModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
  ],
  providers: [
    ApplicationService,
    AuthenticationService,
    SpinnerService,
    LoginGuard
  ]
})
export class SharedModule { }
