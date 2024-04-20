import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackgroundService } from '../background.service';

@Component({
  selector: 'app-app-super-si-page',
  templateUrl: './app-super-si-page.component.html',
  styleUrls: ['./app-super-si-page.component.scss']
})
export class AppSuperSiPageComponent {
  constructor(private router: Router, backgroundService: BackgroundService){
    backgroundService.setBackground(true);
  }
  restart(){
    this.router.navigate([""]);
  }
}
