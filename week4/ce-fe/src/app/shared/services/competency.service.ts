import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CompetencyService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getAllCompetency(): Observable<any> {
    return this.get('api/competency/get-all');
  }

  getAllCompetencyPosition(positionId): Observable<any>  {
    return this.get(`api/competency-position/get-detail?position_id=${positionId}`);
  }

  getCompetencyMappingPosition(id): Observable<any> {
    return this.get(`/api/competency-position/get-all-competency-position/${id}`);
  
  };

  updateCompetencyPosition(data): Observable<any> {
    return this.patch(`/api/competency-position/update`,data);
  };

  getDetailCompetency(id: string): Observable<any> {
    return this.get(`api/competency/${id}`);
  }

  saveCompetency(data, id): Observable<any> {
    const url = !id ? "api/competency/create" : "api/competency/update";
    return !id ? this.post(url, data) : this.put(url, data);
  }
}
