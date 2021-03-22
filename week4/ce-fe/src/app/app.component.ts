import { SpinnerService } from './shared/services/spinner.service';
import { Component, ChangeDetectorRef } from '@angular/core';
import { AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  isShow = 0;
  checked = true;
  constructor(
    private spinnerService: SpinnerService,
    private cd: ChangeDetectorRef,
  ) { }
  date = null;
  ngAfterContentInit(): void {
    this.isShow = 0;
    this.spinnerService.showSpinner.subscribe(show => {
      this.isShow = show ? 1 : 0;
      this.cd.detectChanges();
    });
  }

}
