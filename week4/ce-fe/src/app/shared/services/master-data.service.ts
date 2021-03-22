import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MasterDataService extends BaseService {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  getAllPosition(): Observable<any> {
    return this.get('api/position/get-all');
  }

  getAllPositionGroup(): Observable<any> {
    return this.get('api/postion-group/get-all');
  }
}
