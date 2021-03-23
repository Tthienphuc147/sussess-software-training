import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CompetencyService } from 'src/app/shared/services/competency.service';
import * as _ from 'lodash';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ConfirmModalComponent } from 'src/app/shared/components/modal/confirm-modal/confirm-modal.component';
import { NgxNotificationDirection, NgxNotificationMsgService, NgxNotificationStatusMsg } from 'ngx-notification-msg';
@Component({
  selector: 'app-competency-mapping-manager',
  templateUrl: './competency-mapping-manager.component.html',
  styleUrls: ['./competency-mapping-manager.component.scss']
})
export class CompetencyMappingManagerComponent implements OnInit {

  positionData = [];
  position = null;
  isEdit = false;
  isSubmitted = false;
  competencyPositionData: any;

  constructor(
    private location: Location,
    private competencyService: CompetencyService,
    private modalService: NzModalService,
    private  ngxNotificationMsgService: NgxNotificationMsgService
    ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  onChangePosition(event) {
    this.competencyService.getCompetencyMappingPosition(event).subscribe(res => {
      this.competencyPositionData = res;
    });
    this.isEdit = false;
  }
  validateTable() {
    this.isSubmitted = true;
    let data = [];
    (this.competencyPositionData || []).forEach((item) => {
      data.push(item.itemData);
    });
    return (_.flatten(data) || [])
      .filter((el) => el.is_choosed)
      .every(
        (item) =>
          item.competency_critical_level && item.competency_standard_level
      );
  }

  cancel() {
    this.isEdit = !this.isEdit;
    this.competencyService.getCompetencyMappingPosition(this.position).subscribe(res => {
      this.competencyPositionData = res;
    });
  }

  onChangeChoose(item) {
    let data = [];
    (this.competencyPositionData || []).forEach((item) => {
      data.push(item.itemData);
    });
    let result = (_.flatten(data) || []).find(
      (competency) => competency.id === item.id
    );
    (result.competency_critical_level = null),
      (result.competency_standard_level = null);
  }

  showModal() {
    if (!this.validateTable()) {
      return;
    }
    const modal = this.modalService.create( {
      nzContent: ConfirmModalComponent,
      nzComponentParams: {
        title: 'When you make this change, some evaluation will have the result!',
      },
    } );
    modal.afterClose.subscribe( ( result ) => {
      if ( result && result.data ) {
        let data = [];
        (this.competencyPositionData || []).forEach((item) => {
          data.push(item.itemData);
        });
        data = _.flatten(data).map((item) => {
          const model = {
            id: item.id,
            competency_id: item.competency_id,
            competency_critical_level: +item.competency_critical_level,
            competency_standard_level: +item.competency_standard_level,
            is_choosed: item.is_choosed,
          };
          return model;
        });
        const requestModel = new FormData();
        requestModel.append("competencyPositions", JSON.stringify(data));
        this.competencyService.updateCompetencyPosition(requestModel).subscribe(res => {
          this.ngxNotificationMsgService.open({
            status: NgxNotificationStatusMsg.SUCCESS,
            direction: NgxNotificationDirection.TOP_RIGHT,
            header: 'Notification',
            messages: ['Update successful.']
         });
         this.isEdit = false;
        });
      }
    } );
  }

}
