import { Component, OnInit, ViewChild } from '@angular/core';
import { EvaluationMemberFormComponent } from '../evaluation-member-form/evaluation-member-form.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-evaluation-member-create',
  templateUrl: './evaluation-member-create.component.html',
  styleUrls: ['./evaluation-member-create.component.scss']
})
export class EvaluationMemberCreateComponent implements OnInit {
  @ViewChild('form', {static: true}) form : EvaluationMemberFormComponent;
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  create() : void {
    //this.form.submitForm();
  }

  goBack(): void {
    this.location.back();
  }

}
