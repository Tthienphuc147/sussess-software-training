import { Component, OnInit, ViewChild } from '@angular/core';
import { EvaluationMemberFormComponent } from '../evaluation-member-form/evaluation-member-form.component';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-evaluation-member-create',
  templateUrl: './evaluation-member-create.component.html',
  styleUrls: ['./evaluation-member-create.component.scss']
})
export class EvaluationMemberCreateComponent implements OnInit {
  @ViewChild('form', {static: true}) form : EvaluationMemberFormComponent;
  periodId: any;

  constructor(
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.periodId = this.route.snapshot.paramMap.get('periodId');
  }

  save() {
    this.form.save(false);
  }

  goBack(): void {
    this.location.back();
  }

}
