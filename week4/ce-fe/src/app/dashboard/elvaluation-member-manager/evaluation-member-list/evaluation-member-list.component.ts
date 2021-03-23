import { Component, OnInit } from '@angular/core';
import { EvaluationService } from 'src/app/shared/services/evaluation.service';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ChoosePeriodModalComponent } from 'src/app/shared/components/modal/choose-period-modal/choose-period-modal.component';
@Component({
  selector: 'app-evaluation-member-list',
  templateUrl: './evaluation-member-list.component.html',
  styleUrls: ['./evaluation-member-list.component.scss']
})
export class EvaluationMemberListComponent implements OnInit {

  evaluationList: any;
  constructor(
    private evaluationService:EvaluationService,
    private modalService: NzModalService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.evaluationList = this.evaluationService.getSelfEvaluation().subscribe(res => {
      this.evaluationList = res;
    })
  }

  createEvaluation (): void {
    const modal = this.modalService.create( {
      nzContent: ChoosePeriodModalComponent,
    } );
    modal.afterClose.subscribe( ( result ) => {
      if ( result && result.data ) {
        this.router.navigate(['/dashboard/evaluation-member-manager/create'], { queryParams: { periodId: result.periodId } });
      }
    });
  }

}
