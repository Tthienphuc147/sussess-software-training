import { Component, Input, OnInit } from '@angular/core';
import { DatePipe, Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authenication.service';
import { EvaluationService } from 'src/app/shared/services/evaluation.service';
import { NgxNotificationDirection, NgxNotificationMsgService, NgxNotificationStatusMsg } from 'ngx-notification-msg';
import * as _ from 'lodash';
import { EvaluationPeriodService } from 'src/app/shared/services/evaluation-period.service';
import { AssociateService } from 'src/app/shared/services/associate.service';
import { CompetencyService } from 'src/app/shared/services/competency.service';
@Component({
  selector: 'app-evaluation-member-form',
  templateUrl: './evaluation-member-form.component.html',
  styleUrls: ['./evaluation-member-form.component.scss'],
  providers: [DatePipe]
})
export class EvaluationMemberFormComponent implements OnInit {

  @Input() evaluationId;
  @Input() periodId;
  competencies: any;
  competencyDetail: any;
  userInformation: any;
  evaluationDetail: any;
  manager: any;
  roleId = null;
  period: any;
  isSend :boolean = false;
  status: any;
  constructor(
    private authService: AuthenticationService,
    private evaluationService: EvaluationService,
    private evaluationPeriodService: EvaluationPeriodService,
    private associateService: AssociateService,
    private competencyService: CompetencyService,
    private router: Router,
    private location: Location,
    private datePipe: DatePipe,
    private  ngxNotificationMsgService: NgxNotificationMsgService) { }

  ngOnInit(): void {
    this.roleId = this.authService.getAuthenticationModel().role;
    if (!this.evaluationId && this.periodId) {
      this.evaluationPeriodService.getDetailEvaluationPeriod(this.periodId).subscribe((res) => {
        this.period = res;
      });
      this.associateService.getDetailAssociate(this.authService.getAuthenticationModel().id).subscribe((res) => {
        this.userInformation = res;
        this.competencyService.getAllCompetencyPosition(
          this.userInformation &&
            this.userInformation.position &&
            this.userInformation.position.id
        ).subscribe((res1) => {
          this.competencies = res1;
        });
      });

      return;
    }
    this.evaluationService.getDetailEvaluation(this.evaluationId).subscribe((res) => {
      if (res.associate) {
        this.userInformation.fullName = res.associate.full_name;
        this.manager = res.associate.manager;
        this.manager.birthday = this.datePipe.transform(
         new Date( res.associate.manager && res.associate.manager.birthday ),'dd/MM/yyyy'
        );
        this.userInformation.birthday =this.datePipe.transform(
          new Date( res.associate.birthday ),'dd/MM/yyyy'
         );
        this.userInformation.position = res.associate.position;
        this.userInformation.positionGroup =
          res.associate.position &&
          res.associate.position.position_group;
      }
      this.competencies = res.competencies;
      this.period = res.evaluation_period;
      this.status = res.status;
    });
  }

  getStandardPoint(criticalLevel, data) {
    let sum = 0;
    (data || []).forEach((item) => {
      sum += item.competency_critical_level;
    });
    return Math.round((criticalLevel / sum) * 50);
  }

  getPoint(elvaluatedPoint, standardLevel, point) {
    const result =
      elvaluatedPoint > standardLevel
        ? point
        : Math.round((elvaluatedPoint / standardLevel) * point);
    return result;
  }

  getSumPoint(data, isManager) {
    let sum = 0;
    (data || []).forEach((item) => {
      sum += this.getPoint(
        !isManager ? item.evaluation_level : item.evaluation_level_manager,
        item.competency_standard_level,
        this.getStandardPoint(item.competency_critical_level, data)
      );
    });
    return sum;
  }

  getResult(data) {
    let result = 0;
    (data || []).forEach((item) => {
      result += this.getSumPoint(item.itemData, true);
    });
    return result;
  }

  validateTable() {
    let data = [];
    (this.competencies || []).forEach((item) => {
      data.push(item.itemData);
    });
    if (this.roleId === 2) {
      return (_.flatten(data) || []).every((item) => item.evaluation_level);
    } else {
      return (_.flatten(data) || []).every(
        (item) => item.evaluation_level_manager
      );
    }
  }

  save(isSend) {
    let data = [];
    (this.competencies || []).forEach((item) => {
      data.push(item.itemData);
    });
    data = _.flatten(data).map((competency) => {
      const modelCompetency = {
        id: competency.id,
        competency_id: competency.competency_id,
        evaluation_level:
          competency.evaluation_level && +competency.evaluation_level,
        evaluation_level_manager:
          competency.evaluation_level_manager &&
          +competency.evaluation_level_manager,
        self_note: competency.self_note,
        manager_note: competency.manager_note,
      };
      return modelCompetency;
    });
    let model : any;
    if (isSend) {
      model.isSend = true;
      if (this.roleId === 3) {
        model.isSubmit = true;
        model.result_point = this.getResult(this.competencies);
      }
    }
    model.id = this.evaluationId;
    model.user_id = this.authService.getAuthenticationModel().id;
    model.evaluation_period_id = this.period.id;
    model.competencies = JSON.stringify(data);
    this.evaluationService.saveEvaluation(model, this.evaluationId).subscribe((res) => {
      this.roleId === 2
        ? this.router.navigate(['/dashboard/evaluation-member-manager'])
        : this.location.back();
      const message = this.evaluationId
          ? !isSend
            ? "Update Evaluation Successful."
            : "Submit Evaluation Successful."
          : "Create Evaluation Successful.";
          this.ngxNotificationMsgService.open({
            status: NgxNotificationStatusMsg.SUCCESS,
            direction: NgxNotificationDirection.TOP_RIGHT,
            header: 'Notification',
            messages: [message]
         });
    });
  }

}
