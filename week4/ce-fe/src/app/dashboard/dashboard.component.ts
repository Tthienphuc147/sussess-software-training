import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ERole } from '../shared/enums/role.enum';
import { AuthenticationModel } from '../shared/models/auth/authentication.model';
import { AuthenticationService } from '../shared/services/authenication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isCollapsed = false;
  eRole = ERole;
  currentUser = new AuthenticationModel();
  today = new Date()
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getAuthenticationModel();
  }

  logOut(): void {
      localStorage.clear();
      this.router.navigate(['/']);
  }
}
