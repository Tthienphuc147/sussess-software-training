import { Component, OnInit, ViewChild } from '@angular/core';
import { CompetencyFormComponent } from '../competency-form/competency-form.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-competency-create',
  templateUrl: './competency-create.component.html',
  styleUrls: ['./competency-create.component.scss']
})
export class CompetencyCreateComponent implements OnInit {
  @ViewChild('form', {static: true}) form : CompetencyFormComponent;

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  save() {
    
  }

  goBack(): void {
    this.location.back();
  }

}
