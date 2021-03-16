import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponseBase
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from '../spinner.service';
import { AuthenticationService } from '../authenication.service';
import { NgxNotificationDirection, NgxNotificationMsgService, NgxNotificationStatusMsg } from 'ngx-notification-msg';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];

  constructor(
    private spinnerService: SpinnerService,
    private authenticationService: AuthenticationService,
    private  ngxNotificationMsgService: NgxNotificationMsgService,
    private router: Router) { }

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    this.spinnerService.isLoading.next(this.requests.length > 0);
  }
  private goTo(url: string) {
    setTimeout(() => this.router.navigateByUrl(url));
  }
  private handleData(ev: HttpResponseBase) {
    switch (ev.status) {
      case 200:
        break;
      case 400:
        break;
      case 401:
        this.authenticationService.logOut();
        break;
      case 403:
      case 404:
        // case 500:
        this.goTo(`/exception/${ev.status}`);
        break;
      default:
        break;
    }
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.requests.push(req);
    this.spinnerService.isLoading.next(true);
    const url = req.url;
    const authenticationModel = this.authenticationService.getAuthenticationModel();
    const token = authenticationModel ? authenticationModel.jwttoken : '';
    const headers = {
      Authorization: `Bearer ${token}`
    };
    const newReq = req.clone({ url, setHeaders: headers });
    return Observable.create(observer => {
      const subscription = next.handle(newReq)
        .subscribe(
          event => {
            if (event instanceof HttpResponse) {
              this.removeRequest(req);
              observer.next(event);
            }
          },
          err => {
            this.handleData(err);
            //TODO add notification
            console.log(err);
            
            this.ngxNotificationMsgService.open({
              status: NgxNotificationStatusMsg.FAILURE,
              direction: NgxNotificationDirection.TOP_RIGHT,
              header: 'Error',
              delay:4000,
              messages: [err.error && err.error && err.error.error.message],
           });
            this.removeRequest(req);
            observer.error(err);
          },
          () => {
            this.removeRequest(req);
            observer.complete();
          });
      // remove request from queue when cancelled
      return () => {
        this.removeRequest(req);
        subscription.unsubscribe();
      };
    });
  }
}