import { Component, OnInit } from '@angular/core';
import { EvaluationService } from 'src/app/shared/services/evaluation.service';

@Component({
  selector: 'app-evaluation-list',
  templateUrl: './evaluation-list.component.html',
  styleUrls: ['./evaluation-list.component.scss']
})
export class EvaluationListComponent implements OnInit {

  evaluationList: any;
  constructor(
    private evaluationService:EvaluationService
  ) { }

  ngOnInit(): void {
    this.evaluationList = this.evaluationService.getAllEvaluation().subscribe(res => {
      this.evaluationList = res;
    })
  }

}
