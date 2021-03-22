import { Component, OnInit, ViewChild } from '@angular/core';
import { EvaluationPeriodFormComponent } from '../evaluation-period-form/evaluation-period-form.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-evaluation-period-create',
  templateUrl: './evaluation-period-create.component.html',
  styleUrls: ['./evaluation-period-create.component.scss']
})
export class EvaluationPeriodCreateComponent implements OnInit {

  @ViewChild('form', {static: true}) form: EvaluationPeriodFormComponent; 
  id: string;
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  create() : void {
    this.form.submitForm();
  }

  goBack(): void {
    this.location.back();
  }

}
