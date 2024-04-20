import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackgroundService } from '../background.service';

@Component({
  selector: 'app-app-poleka-page',
  templateUrl: './app-poleka-page.component.html',
  styleUrls: ['./app-poleka-page.component.scss']
})
export class AppPolekaPageComponent {

  constructor(private router: Router, backgroundService: BackgroundService){
    backgroundService.setBackground(true);
  }
  restart(){
    this.router.navigate([""]);
  }
}
