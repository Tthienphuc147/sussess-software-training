import { Component, OnInit } from '@angular/core';
import { AssociateService } from 'src/app/shared/services/associate.service';

@Component({
  selector: 'app-associate-list',
  templateUrl: './associate-list.component.html',
  styleUrls: ['./associate-list.component.scss']
})
export class AssociateListComponent {
  dtoList = [];
  constructor(private associateService: AssociateService) { }

  getAll(event): void {
    this.associateService.getAllAssociate().subscribe(res => {
      this.dtoList = res;
    })
  }

}
