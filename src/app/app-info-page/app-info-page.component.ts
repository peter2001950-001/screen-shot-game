import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CounterAPI } from 'counterapi';

@Component({
  selector: 'app-app-info-page',
  templateUrl: './app-info-page.component.html',
  styleUrls: ['./app-info-page.component.scss']
})
export class AppInfoPageComponent {

  private counter = new CounterAPI();
  constructor(private router: Router){

  }

  start(){
    this.router.navigate(["game"]);
    this.counter.up("screen-shot-game", "single-game-play", true);
  }
}
