import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvaluationPeriodFormComponent } from '../evaluation-period-form/evaluation-period-form.component';

@Component({
  selector: 'app-evaluation-period-edit',
  templateUrl: './evaluation-period-edit.component.html',
  styleUrls: ['./evaluation-period-edit.component.scss']
})
export class EvaluationPeriodEditComponent implements OnInit {

  @ViewChild('form', {static: true}) form: EvaluationPeriodFormComponent; 
  id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  save(): void {
    this.form.submitForm();
  }

}
