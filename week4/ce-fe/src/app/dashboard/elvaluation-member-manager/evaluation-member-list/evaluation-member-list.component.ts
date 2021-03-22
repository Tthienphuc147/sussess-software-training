import { Component, OnInit } from '@angular/core';
import { EvaluationService } from 'src/app/shared/services/evaluation.service';

@Component({
  selector: 'app-evaluation-member-list',
  templateUrl: './evaluation-member-list.component.html',
  styleUrls: ['./evaluation-member-list.component.scss']
})
export class EvaluationMemberListComponent implements OnInit {

  evaluationList: any;
  constructor(
    private evaluationService:EvaluationService
  ) { }

  ngOnInit(): void {
    this.evaluationList = this.evaluationService.getSelfEvaluation().subscribe(res => {
      this.evaluationList = res;
    })
  }

}
