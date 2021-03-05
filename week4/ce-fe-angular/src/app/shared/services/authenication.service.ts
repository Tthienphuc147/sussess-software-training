import { environment } from './../../../environments/environment';
import { localStorageKey } from 'src/app/app.config';
declare var window: any;
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationModel } from '../models/auth/authentication.model';
import { BaseService } from './base.service';

import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthenticationService extends BaseService {
  public accessToken: string;
  constructor(private httpClient: HttpClient, private router: Router) {
    super(httpClient);
  }

  public login(usernameOrEmail: string, password: string): Observable<any> {

    // TODO open when implemented
    return this.post<AuthenticationModel>('api/login', {
      username: usernameOrEmail,
      password: password
    });
  }

  public setAuthenticationModel(authenticationModel: AuthenticationModel) {
    return (window.localStorage[localStorageKey] = JSON.stringify(
      authenticationModel
    ));
  }

  public getAuthenticationModel(): AuthenticationModel {
    if (!window.localStorage[localStorageKey]) {
      return null;
    }
    try {
      return JSON.parse(window.localStorage[localStorageKey]);
    } catch (error) {
      return null;
    }
  }
  public logOut() {
    //TODO logOut
    localStorage.clear();
    this.router.navigate(['/']);
  }

}