import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponseBase
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { SpinnerService } from '../spinner.service';
import { AuthenticationService } from '../authenication.service';
import { NgxNotificationDirection, NgxNotificationMsgService, NgxNotificationStatusMsg } from 'ngx-notification-msg';
import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  public cacheErrData$: Observable<any[]>;
    constructor(
        private injector: Injector,
        private authenticationService: AuthenticationService,
        private spinnerService: SpinnerService,
        private http: HttpClient
    ) { }

    private goTo(url: string) {
        setTimeout(() => this.injector.get(Router).navigateByUrl(url));
    }

    private checkStatus(ev: any) {
        if (!ev) {
            return;
        }
    }

    private handleData(ev: HttpResponseBase, showSpinner: boolean): void {
        this.checkStatus(ev);
        if (showSpinner) {
            this.spinnerService.hide();
        }
        switch (ev.status) {
            case 200:
                break;
            case 400:
                break;
            case 401:
                this.authenticationService.logOut();
                break;
            case 403:
                this.goTo(`/page-not-permission`);
                break;
            case 404:
                this.goTo(`/page-not-found`);
                break;
            case 500:
                
                break;
            default:
                break;
        }
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let showSpinner = true;
        if (showSpinner) {
            this.spinnerService.show();
        }

        const url = req.url;
        const authenticationModel = this.authenticationService.getAuthenticationModel();
        const token = authenticationModel ? authenticationModel.jwttoken : '';
        const headers = {
            Authorization: `Bearer ${
                this.authenticationService.accessToken
                    ? this.authenticationService.accessToken
                    : token
                }`
        };
        const newReq = req.clone({ url, setHeaders: headers });

        return next.handle(newReq).pipe(
            mergeMap((event: any) => {
                if (event instanceof HttpResponseBase) {
                    this.handleData(event, showSpinner);
                }
                return of(event);
            }),
            catchError((err: HttpErrorResponse) => {
                this.handleData(err, showSpinner);
                return throwError(err);
            })
        );
    }
}