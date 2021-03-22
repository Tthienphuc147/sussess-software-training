import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getMemberEvaluation(id): Observable<any> {
    return this.get(`api/evaluation/get-member-list/${id}`);
  }

  getAllEvaluation(): Observable<any> {
    return this.get('api/evaluation/get-all');
  }
  
  getDetailEvaluation(id) : Observable<any> {
    return this.get(`api/evaluation/${id}`);
  }

  getSelfEvaluation(): Observable<any> {
    return this.get('api/evaluation/get-self-list');
  }

  approveEvaluation(data): Observable<any> {
    return this.post(`api/evaluation/approve`,data);
  };
  saveEvaluation(data,id): Observable<any> {
    const url = !id ? "api/evaluation/self-create" : "api/evaluation/update";
    return !id ? this.post(url, data) : this.patch(url, data);
  };
}
