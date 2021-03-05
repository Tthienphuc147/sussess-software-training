import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentFactoryResolver, Injector, NgModule } from '@angular/core';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { LoaderInterceptor } from './shared/services/interceptors/loader-interceptor.service';
import { SpinnerService } from './shared/services/spinner.service';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AssociateManagerModule } from './dashboard/associate-manager/associate-manager.module';
import { CompetencyManagerModule } from './dashboard/competency-manager/competency-manager.module';
import { ElvaluationMemberManagerModule } from './dashboard/elvaluation-member-manager/elvaluation-member-manager.module';
import { EvaluationManagerModule } from './dashboard/evaluation-manager/evaluation-manager.module';
import { EvaluationPeriodManagerModule } from './dashboard/evaluation-period-manager/evaluation-period-manager.module';
import { MemberManagerModule } from './dashboard/member-manager/member-manager.module';
import { PageNotFoundComponent } from './exception/page-not-found/page-not-found.component';
import { PageNotPermissionComponent } from './exception/page-not-permission/page-not-permission.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    PageNotPermissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    NoopAnimationsModule,
    AppRoutingModule,
    DashboardModule,
    AssociateManagerModule,
    CompetencyManagerModule,
    ElvaluationMemberManagerModule,
    EvaluationManagerModule,
    EvaluationPeriodManagerModule,
    MemberManagerModule,
  ],
  providers: [
    HttpClientModule,
    SpinnerService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
