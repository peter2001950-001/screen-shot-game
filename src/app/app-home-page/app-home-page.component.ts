import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CounterAPI } from 'counterapi';
import { GameEngineService } from '../game-engine.service';

@Component({
  selector: 'app-app-home-page',
  templateUrl: './app-home-page.component.html',
  styleUrls: ['./app-home-page.component.scss']
})
export class AppHomePageComponent implements OnInit {

  private counter = new CounterAPI();
  playedGames: number|undefined;
  constructor(private router: Router, private gameService: GameEngineService){}
  ngOnInit(): void {
    this.counter.get("screen-shot-game", "single-game-play", true).then((value)=>{
      this.playedGames = value.Count
    })
  }
  start(){
    this.gameService.restart();
    this.router.navigate(["info"])
  }
}
