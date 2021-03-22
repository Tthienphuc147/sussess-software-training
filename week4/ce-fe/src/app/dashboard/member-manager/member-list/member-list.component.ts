import { Component, OnInit } from '@angular/core';
import { EProfileRole } from 'src/app/shared/enums/profile-role.enum';
import { ERole } from 'src/app/shared/enums/role.enum';
import { AssociateService } from 'src/app/shared/services/associate.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  memberList = [];
  eRole = EProfileRole;
  constructor(private associateService: AssociateService) { }

  ngOnInit(): void {
    this.getAll();
    
  }

  getAll(): void {
    this.associateService.getAllAssociate().subscribe(res => {
      this.memberList = res;
    })
  }



}
