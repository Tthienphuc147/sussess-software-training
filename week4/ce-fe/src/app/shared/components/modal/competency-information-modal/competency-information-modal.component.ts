import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { CompetencyService } from 'src/app/shared/services/competency.service';

@Component({
  selector: 'app-competency-information-modal',
  templateUrl: './competency-information-modal.component.html',
  styleUrls: ['./competency-information-modal.component.scss']
})
export class CompetencyInformationModalComponent implements OnInit {

  @Input() id;
  competencyDetail: any;
  constructor(
    private modal: NzModalRef,
    private competencyService: CompetencyService,
  ) { }

  ngOnInit(): void {
    this.competencyService.getDetailCompetency(this.id).subscribe(res => {
      this.competencyDetail = res;
    })
  }

  cancelModal(): void {
    this.modal.destroy({ data: false });
  }

}
