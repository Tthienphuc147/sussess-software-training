import { Component, OnInit, ViewChild } from '@angular/core';
import { AssociateFormComponent } from '../associate-form/associate-form.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-associate-create',
  templateUrl: './associate-create.component.html',
  styleUrls: ['./associate-create.component.scss']
})
export class AssociateCreateComponent implements OnInit {
  @ViewChild('form', {static: true}) form : AssociateFormComponent;
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
