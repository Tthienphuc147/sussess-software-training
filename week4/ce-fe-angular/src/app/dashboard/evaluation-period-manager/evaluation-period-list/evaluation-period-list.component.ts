import { Component, OnInit } from '@angular/core';
import { EvaluationPeriodService } from 'src/app/shared/services/evaluation-period.service';

@Component({
  selector: 'app-evaluation-period-list',
  templateUrl: './evaluation-period-list.component.html',
  styleUrls: ['./evaluation-period-list.component.scss']
})
export class EvaluationPeriodListComponent {

  dtoList = [];
  constructor(private evaluationPeriodService: EvaluationPeriodService) { }

  getAll(event): void {
    this.evaluationPeriodService.getAllEvaluationPeriod().subscribe(res => {
      this.dtoList = res;
    })
  }

}
