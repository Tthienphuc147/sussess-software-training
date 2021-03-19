import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Associate } from 'src/app/shared/models/associate/associate.model';
import { AuthenticationModel } from 'src/app/shared/models/auth/authentication.model';
import { AssociateService } from 'src/app/shared/services/associate.service';
import { AuthenticationService } from 'src/app/shared/services/authenication.service';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.scss']
})
export class AccountInformationComponent implements OnInit {

  associate = new Associate();
  accountForm: FormGroup;
  currentUser = new AuthenticationModel();

  constructor(
    private associateService: AssociateService,
    private authService: AuthenticationService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.currentUser = this.authService.getAuthenticationModel();
    // this.associateService.getDetailAssociate(this.currentUser.id).subscribe(res => {
    //   this.associate = res;
    //   this.createForm();
    // })
    this.createForm();
  }

  createForm() {
    this.accountForm = this.fb.group({
      fullName:[this.associate.fullName],
      email:[this.associate.email],
      position: [this.associate.position && this.associate.position.name],
      birthday: [this.associate.birthday ? new Date(this.associate.birthday): null],
      positionGroup: [this.associate.positionGroup && this.associate.positionGroup.name]
    })
  }

}
