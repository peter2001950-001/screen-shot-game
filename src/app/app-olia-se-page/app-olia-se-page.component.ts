import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackgroundService } from '../background.service';

@Component({
  selector: 'app-app-olia-se-page',
  templateUrl: './app-olia-se-page.component.html',
  styleUrls: ['./app-olia-se-page.component.scss']
})
export class AppOliaSePageComponent {
  constructor(private router: Router, backgroundService: BackgroundService){
    backgroundService.setBackground(true);
  }
  restart(){
    this.router.navigate([""]);
  }
}
