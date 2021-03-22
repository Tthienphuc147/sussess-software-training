  
import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-my-loader',
  templateUrl: './my-loader.component.html',
  styleUrls: ['./my-loader.component.scss']
})
export class MyLoaderComponent implements OnInit {
  constructor(private spinnerService: SpinnerService) {
  }
  ngOnInit() {
  }

}