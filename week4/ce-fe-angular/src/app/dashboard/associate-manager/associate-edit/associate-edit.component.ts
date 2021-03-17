import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssociateFormComponent } from '../associate-form/associate-form.component';

@Component({
  selector: 'app-associate-edit',
  templateUrl: './associate-edit.component.html',
  styleUrls: ['./associate-edit.component.scss']
})
export class AssociateEditComponent implements OnInit {
  id: string;
  @ViewChild('form', {static: true}) form : AssociateFormComponent;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  save(): void {
    this.form.submitForm();
  }


}
