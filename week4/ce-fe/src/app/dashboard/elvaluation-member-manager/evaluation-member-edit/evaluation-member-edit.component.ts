import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluationMemberFormComponent } from '../evaluation-member-form/evaluation-member-form.component';
import { AuthenticationService } from 'src/app/shared/services/authenication.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NgxNotificationMsgService, NgxNotificationStatusMsg, NgxNotificationDirection } from 'ngx-notification-msg';
import { ConfirmModalComponent } from 'src/app/shared/components/modal/confirm-modal/confirm-modal.component';
@Component({
  selector: 'app-evaluation-member-edit',
  templateUrl: './evaluation-member-edit.component.html',
  styleUrls: ['./evaluation-member-edit.component.scss']
})
export class EvaluationMemberEditComponent implements OnInit {
  id: string;
  currentStatus : any;
  role: any;

  @ViewChild('form', {static: true}) form : EvaluationMemberFormComponent;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private location: Location,
    private router: Router,
    private modalService: NzModalService,
    private  ngxNotificationMsgService: NgxNotificationMsgService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.currentStatus = this.form.status;
    this.role = this.authService.getAuthenticationModel().role;
  }

  save() {
    this.form.save(false);
  }
  send() {
    this.form.isSend = true;
    if (
      this.form.isSend &&
      !this.form.validateTable()
    ) {
      return;
    }
    const modal = this.modalService.create( {
      nzContent: ConfirmModalComponent,
      nzComponentParams: {
        title: this.role === 3 ? 'Are you sure submit this evaluation to HR?' : 'Are you sure complete this evaluation?',
      },
    } );
    modal.afterClose.subscribe( ( result ) => {
      if ( result && result.data ) {
        this.form.save(true);
      }
    } );
  }

  goBack(): void {
    this.role === 2 ? this.router.navigate(["/evaluation-member-manager"]) : this.location.back();
  }

}
