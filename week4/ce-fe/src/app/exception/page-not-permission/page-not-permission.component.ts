import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-permission',
  templateUrl: './page-not-permission.component.html',
  styleUrls: ['./page-not-permission.component.scss']
})
export class PageNotPermissionComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo() {
    this.router.navigate(['/dashboard']);
  }

}
