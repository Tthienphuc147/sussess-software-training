import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EvaluationMemberFormComponent } from '../evaluation-member-form/evaluation-member-form.component';
@Component({
  selector: 'app-evaluation-member-edit',
  templateUrl: './evaluation-member-edit.component.html',
  styleUrls: ['./evaluation-member-edit.component.scss']
})
export class EvaluationMemberEditComponent implements OnInit {
  id: string;
  @ViewChild('form', {static: true}) form : EvaluationMemberFormComponent;
  constructor(
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  save(): void {
    //this.form.submitForm();
  }

  goBack(): void {
    this.location.back();
  }

}
