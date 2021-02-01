import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookReceipt } from '../models/cook-receipt.model';
import { DictionaryItem } from '../models/dictionary-item.model';
import { Receipt } from '../models/receipt.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {
  constructor(private httpClient: HttpClient) { 
    super(httpClient);
  }
  getAllCategory(): Observable<DictionaryItem[]> {
    const url = `api/receipt-category/get-all`;
    return this.get<DictionaryItem[]>(url);
  }

  getCategoryDetail(id?: string): Observable<CookReceipt[]> {
    const url = `api/hoc-van/${id}`;
    return this.get<CookReceipt[]>(url);
  }

  
}
