import { Component, OnInit } from '@angular/core';
import { ReceiptService } from 'src/shared/services/receipt.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private receiptService: ReceiptService) { }

  ngOnInit(): void {
    
  }

}
