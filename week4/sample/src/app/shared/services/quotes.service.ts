import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class QuotesService extends BaseService {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  getAllQuotes(): Observable<any> {
    return this.get('api/quotes/get-all');
  }

  changeApprove(id): Observable<any> {
    return this.patch(`api/quotes/change-approve`,id)
  }
}
