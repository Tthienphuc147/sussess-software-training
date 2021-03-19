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

    return this.post<AuthenticationModel>('api/login', {
      email: usernameOrEmail,
      password: password
    });
  }

  public setAuthenticationModel(authenticationModel: AuthenticationModel) {
    return (window.localStorage[localStorageKey] = JSON.stringify(
      authenticationModel
    ));
  }

  public getAuthenticationModel(): AuthenticationModel {
    // if (!window.localStorage[localStorageKey]) {
    //   return null;
    // }
    // try {
    //   let result = JSON.parse(window.localStorage[localStorageKey]) as AuthenticationModel;
    //   result.role = result.role === '1' ? 'ADMIN_ROLE' : result.role === '2' ? 'MEMBER_ROLE' : 'MANAGER_ROLE';
    //   //TODO role temp
    //   result.role = 'ADMIN_ROLE';
    //   return result;
    // } catch (error) {
    //   return null;
    // }
    let result = new AuthenticationModel();
    result.role = 'ADMIN_ROLE';
    return result;
  }
  public logOut() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}