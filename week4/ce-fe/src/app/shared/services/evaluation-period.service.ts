import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class EvaluationPeriodService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getAllEvaluationPeriod(): Observable<any> {
    return this.get('api/evaluation-period/get-all');
  }

  getDetailEvaluationPeriod(id: string): Observable<any> {
    return this.get(`api/evaluation-period/${id}`);
  }

  saveEvaluationPeriod(data, id): Observable<any> {
    const url = !id ? "api/evaluation-period/create" : "api/evaluation-period/update";
    return !id ? this.post(url, data) : this.put(url, data);
  }
}
