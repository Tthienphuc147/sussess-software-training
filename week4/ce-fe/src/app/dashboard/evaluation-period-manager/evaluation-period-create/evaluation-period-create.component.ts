import { Component, OnInit, ViewChild } from '@angular/core';
import { EvaluationPeriodFormComponent } from '../evaluation-period-form/evaluation-period-form.component';

@Component({
  selector: 'app-evaluation-period-create',
  templateUrl: './evaluation-period-create.component.html',
  styleUrls: ['./evaluation-period-create.component.scss']
})
export class EvaluationPeriodCreateComponent implements OnInit {

  @ViewChild('form', {static: true}) form: EvaluationPeriodFormComponent; 
  id: string;
  constructor() { }

  ngOnInit(): void {
  }

  save(): void {
    this.form.submitForm();
  }

}
