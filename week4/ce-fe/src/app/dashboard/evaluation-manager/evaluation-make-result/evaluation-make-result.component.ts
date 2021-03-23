import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluationMemberFormComponent } from '../../elvaluation-member-manager/evaluation-member-form/evaluation-member-form.component';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ConfirmModalComponent } from 'src/app/shared/components/modal/confirm-modal/confirm-modal.component';
import { EvaluationService } from 'src/app/shared/services/evaluation.service';
import { NgxNotificationDirection, NgxNotificationMsgService, NgxNotificationStatusMsg } from 'ngx-notification-msg';

@Component({
  selector: 'app-evaluation-make-result',
  templateUrl: './evaluation-make-result.component.html',
  styleUrls: ['./evaluation-make-result.component.scss']
})
export class EvaluationMakeResultComponent implements OnInit {
  @ViewChild('form', {static: true}) form : EvaluationMemberFormComponent;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private modalService: NzModalService,
    private evaluationService: EvaluationService,
    private  ngxNotificationMsgService: NgxNotificationMsgService) { }

  ngOnInit(): void {
  }

  approve() {
    const modal = this.modalService.create( {
      nzContent: ConfirmModalComponent,
      nzComponentParams: {
        title: 'Are you sure approve this evaluation?',
      },
    } );
    modal.afterClose.subscribe( ( result ) => {
      if ( result && result.data ) {
        const model = new FormData();
      model.append("id", this.route.snapshot.params['id']);
      this.evaluationService.approveEvaluation(model).subscribe(res => {
        this.ngxNotificationMsgService.open({
          status: NgxNotificationStatusMsg.SUCCESS,
          direction: NgxNotificationDirection.TOP_RIGHT,
          header: 'Notification',
          messages: ['Approve Evaluation Successfully']
       });
        this.location.back();
      });
      }
    } );
  }

  goBack(): void {
    this.location.back();
  }

}
