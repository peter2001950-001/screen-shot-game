import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameEngineService {

  constructor() { }

  private score: number = 0;
  public gamesCount: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  private totalGames: number = 10;
  public winner(){
      this.score++;
      this.gamesCount.next(this.gamesCount.value+1);
  }

  public looser(){
    this.gamesCount.next(this.gamesCount.value+1);
  }

  public getNextPage(): string{
    if(this.gamesCount.value > this.totalGames){
      this.gamesCount.next(1);
      if(this.score>=0 && this.score<=4){
        return "olia-se"
      }else if(this.score>=5 && this.score<=7){
        return "poleka"
      }else{
        return "super-si"
      }
    }
    return "game";
  }
}
