import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { EvaluationPeriodService } from 'src/app/shared/services/evaluation-period.service';

@Component({
  selector: 'app-choose-period-modal',
  templateUrl: './choose-period-modal.component.html',
  styleUrls: ['./choose-period-modal.component.scss']
})
export class ChoosePeriodModalComponent implements OnInit {
  
  availablePeriodData: any;
  period: any;
  constructor(
    private modal: NzModalRef,
    private router: Router,
    private evaluationPeriodService: EvaluationPeriodService,
  ) {}

  ngOnInit(): void {
    this.evaluationPeriodService.getAllEvaluationPeriod().subscribe(res => {
      this.availablePeriodData = res;
    })
  }

  changePeriod(event) {
    this.period = event;
  }

  cancelModal(): void {
    this.modal.destroy({ data: false });
  }

  confirmModal(): void {
    this.modal.destroy({ data: true });
  }

}
