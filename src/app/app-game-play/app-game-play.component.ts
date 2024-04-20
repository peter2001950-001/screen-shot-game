import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../background.service';
import { Router } from '@angular/router';
import { GameEngineService } from '../game-engine.service';
import {CounterAPI} from "counterapi";

@Component({
  selector: 'app-app-game-play',
  templateUrl: './app-game-play.component.html',
  styleUrls: ['./app-game-play.component.scss']
})
export class AppGamePlayComponent implements OnInit {
  height: number =  0;
  transform:number =  -360
  interval: any;
  perfect: number = 292;
  max: number = 350;
  numberOfGames: number;
  private counter = new CounterAPI();


  constructor(backgroundService : BackgroundService, private router: Router, private engine: GameEngineService){
    backgroundService.setBackground(false);
    this.numberOfGames =  engine.gamesCount.value;
    engine.gamesCount.subscribe((val)=>{
      this.numberOfGames = val;
    });
  }
  ngOnInit(): void {
    this.height =  0;
    this.transform =  -360
    var intervalFast = this.getRandomInt(50)+20;
    var step = this.getRandomInt(2) + 3;

   this.interval = setInterval(() =>{
      this.height += step;
      this.transform += step;

      if(this.height> this.max)
        this.stop();

    }, intervalFast);
  }

  stop(){
    clearInterval(this.interval);

    setTimeout(() => {
      if(this.height >= this.perfect - 10 && this.height <= this.perfect + 10){
        this.engine.winner();
      }else{
        this.engine.looser();
      }

      var nextPage = this.engine.getNextPage();
      if(nextPage == "game"){
        this.ngOnInit();
      }else{
        this.router.navigate([nextPage]);
      }
    }, 1500);
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
