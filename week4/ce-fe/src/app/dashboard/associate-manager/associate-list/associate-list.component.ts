import { Component, OnInit } from '@angular/core';
import { EProfileRole } from 'src/app/shared/enums/profile-role.enum';
import { ERole } from 'src/app/shared/enums/role.enum';
import { AssociateService } from 'src/app/shared/services/associate.service';

@Component({
  selector: 'app-associate-list',
  templateUrl: './associate-list.component.html',
  styleUrls: ['./associate-list.component.scss']
})
export class AssociateListComponent implements OnInit{
  associateList = [];
  eRole = EProfileRole;
  constructor(private associateService: AssociateService) { }

  ngOnInit(): void {
    this.getAll();
    
  }

  getAll(): void {
    this.associateService.getAllAssociate().subscribe(res => {
      this.associateList = res;
    })
  }


}
