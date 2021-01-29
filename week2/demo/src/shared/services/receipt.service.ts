import { Injectable } from '@angular/core';
import { Receipt } from '../models/receipt.model';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  public receiptData : Receipt[] = [];
  constructor() { 
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
}
