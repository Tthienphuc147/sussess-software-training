import { Component, OnInit } from '@angular/core';
import { QuotesService } from './shared/services/quotes.service';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isVisible = false;
  content: string;
  quotesData = [];
  constructor(
    private quotesService: QuotesService,
    private nzMessageService: NzMessageService
    ) {}

  ngOnInit(): void {
    this.quotesService.getAllQuotes().subscribe(res=> {
      this.quotesData = res;
    })
  }


  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  confirm(data): void {
    data.is_approve = !data.is_approve;
    this.quotesService.changeApprove(data.id).subscribe(res => {
      this.nzMessageService.info('click confirm');
    })
  }

  showModal(data): void {
    this.isVisible = true;
    this.content = data;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
