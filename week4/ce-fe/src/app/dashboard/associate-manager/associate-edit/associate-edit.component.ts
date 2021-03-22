import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssociateFormComponent } from '../associate-form/associate-form.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-associate-edit',
  templateUrl: './associate-edit.component.html',
  styleUrls: ['./associate-edit.component.scss']
})
export class AssociateEditComponent implements OnInit {
  id: string;
  @ViewChild('form', {static: true}) form : AssociateFormComponent;
  constructor(
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  save(): void {
    this.form.submitForm();
  }

  goBack(): void {
    this.location.back();
  }


}
