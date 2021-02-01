import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookReceipt } from '../models/cook-receipt.model';
import { Receipt } from '../models/receipt.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService extends BaseService {
  public receiptData : Receipt[] = [];
  constructor(private httpClient: HttpClient) { 
    super(httpClient);
    for(let i = 0 ; i < 10 ; i++) {
      let item = {
        id: i+1,
        name: `Tasty ${i+1}`,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxksu1IgbU472mcvB-t1373Um00ZunRnhwEw&usqp=CAU',
        ingredients: [
          {
            name: 'Rice',
            amount: 3
          },
          {
            name: 'Vegetables',
            amount: 2
          },
          {
            name: 'Pork',
            amount: 4
          },
        ]
      }
      this.receiptData.push(item);
    }
  }
  getAllReceipt(): Observable<CookReceipt[]> {
    const url = `api/receipt/get-all`;
    return this.get<CookReceipt[]>(url);
  }

  getReceiptDetail(id?: string): Observable<CookReceipt> {
    const url = `api/hoc-van/${id}`;
    return this.get<CookReceipt>(url);
  }


}
