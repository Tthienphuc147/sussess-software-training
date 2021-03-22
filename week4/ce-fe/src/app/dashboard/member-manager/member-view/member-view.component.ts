import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AssociateService } from 'src/app/shared/services/associate.service';
import { EvaluationService } from 'src/app/shared/services/evaluation.service';
import { Associate } from 'src/app/shared/models/associate/associate.model';
import { forkJoin, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.scss'],
})
export class MemberViewComponent implements OnInit {

  id: number;
  associateDetail = new Associate();
  evaluationList = [];

  constructor(
    private location: Location,
    private associateService: AssociateService,
    private evaluationService: EvaluationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    let sources: Observable<any>[] = [];
    sources.push(this.associateService.getDetailAssociate(this.id));
    sources.push(this.evaluationService.getMemberEvaluation(this.id))
    forkJoin(sources).subscribe(([res1, res2]) => {
      this.associateDetail = res1;
      this.evaluationList = res2;
    })
  }

  goBack(): void {
    this.location.back();
  }


}
