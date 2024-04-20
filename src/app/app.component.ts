import { Component } from '@angular/core';
import { BackgroundService } from './background.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isBlurred?: boolean;
  constructor(public backgroundService: BackgroundService){
    this.isBlurred = backgroundService.getBackground().getValue();

    backgroundService.getBackground().subscribe((value)=>{
      this.isBlurred = value;
    })
  }
  title = 'screen-shot-game';
}
