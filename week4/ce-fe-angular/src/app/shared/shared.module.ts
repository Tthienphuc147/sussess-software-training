import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from './components/component.module';
import { ApplicationService } from './services/aplication.service';
import { AuthenticationService } from './services/authenication.service';
import { SpinnerService } from './services/spinner.service';
import { BlockUIModule } from 'primeng';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { CalendarModule } from 'primeng/calendar';
import { NgxNotificationMsgModule } from 'ngx-notification-msg';
import { LoginGuard } from './guards/login.guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule,
    BlockUIModule,
    TableModule,
    DialogModule,
    MenuModule,
    InputTextModule,
    ButtonModule,
    AccordionModule,
    TabViewModule,
    DropdownModule,
    EditorModule,
    CalendarModule,
    NgxNotificationMsgModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ComponentModule,
    TableModule,
    DialogModule,
    MenuModule,
    InputTextModule,
    ButtonModule,
    AccordionModule,
    TabViewModule,
    DropdownModule,
    EditorModule,
    CalendarModule
  ],
  providers: [
    ApplicationService,
    AuthenticationService,
    SpinnerService,
    LoginGuard
  ]
})
export class SharedModule { }
