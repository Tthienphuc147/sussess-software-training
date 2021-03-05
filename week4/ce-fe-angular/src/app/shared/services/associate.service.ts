import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AssociateService extends BaseService {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  getAllAssociate(): Observable<any> {
    return this.get('api/associate/get-all');
  }

  getDetailAssociate(id: string): Observable<any> {
    return this.get(`api/associate/${id}`);
  }

  saveAssociate(data, id): Observable<any> {
    const url = !id ? "api/associate/create" : "api/associate/update";
    return !id ? this.post(url, data) : this.put(url, data);
  }
}
