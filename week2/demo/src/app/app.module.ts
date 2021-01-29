import { CommonModule, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComponentFactoryResolver, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/shared/shared.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzConfig, NzI18nService, NZ_I18N, en_US } from 'ng-zorro-antd';
import en from '@angular/common/locales/en';
registerLocaleData(en);
const ngZorroConfig: NzConfig = {
  message: { nzTop: 120 },
  notification: { nzTop: 240 }
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    NoopAnimationsModule,
    AppRoutingModule,
  ],
  providers: [
    HttpClientModule,
    {
      provide: NZ_I18N,
      useValue: ngZorroConfig,
      deps: [Injector, ComponentFactoryResolver]
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (
    private i18n: NzI18nService
  ) {
    this.i18n.setLocale(en_US);
  }
 }
